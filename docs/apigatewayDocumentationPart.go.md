# `apigatewayDocumentationPart` Submodule <a name="`apigatewayDocumentationPart` Submodule" id="@cdktn/provider-awscc.apigatewayDocumentationPart"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDocumentationPart <a name="ApigatewayDocumentationPart" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part awscc_apigateway_documentation_part}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaydocumentationpart"

apigatewaydocumentationpart.NewApigatewayDocumentationPart(scope Construct, id *string, config ApigatewayDocumentationPartConfig) ApigatewayDocumentationPart
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig">ApigatewayDocumentationPartConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig">ApigatewayDocumentationPartConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation">PutLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation"></a>

```go
func PutLocation(value ApigatewayDocumentationPartLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDocumentationPart resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaydocumentationpart"

apigatewaydocumentationpart.ApigatewayDocumentationPart_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaydocumentationpart"

apigatewaydocumentationpart.ApigatewayDocumentationPart_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaydocumentationpart"

apigatewaydocumentationpart.ApigatewayDocumentationPart_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaydocumentationpart"

apigatewaydocumentationpart.ApigatewayDocumentationPart_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApigatewayDocumentationPart resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigatewayDocumentationPart to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigatewayDocumentationPart that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDocumentationPart to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.documentationPartId">DocumentationPartId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference">ApigatewayDocumentationPartLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.locationInput">LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.propertiesInput">PropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiIdInput">RestApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.properties">Properties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DocumentationPartId`<sup>Required</sup> <a name="DocumentationPartId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.documentationPartId"></a>

```go
func DocumentationPartId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.location"></a>

```go
func Location() ApigatewayDocumentationPartLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference">ApigatewayDocumentationPartLocationOutputReference</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.locationInput"></a>

```go
func LocationInput() interface{}
```

- *Type:* interface{}

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.propertiesInput"></a>

```go
func PropertiesInput() *string
```

- *Type:* *string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiIdInput"></a>

```go
func RestApiIdInput() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.properties"></a>

```go
func Properties() *string
```

- *Type:* *string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDocumentationPartConfig <a name="ApigatewayDocumentationPartConfig" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaydocumentationpart"

&apigatewaydocumentationpart.ApigatewayDocumentationPartConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation,
	Properties: *string,
	RestApiId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.properties">Properties</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.location"></a>

```go
Location ApigatewayDocumentationPartLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to.

`Location` is a property of the [AWS::ApiGateway::DocumentationPart](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.
For more information about each property, including constraints and valid values, see [DocumentationPart](https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPartLocation.html) in the *Amazon API Gateway REST API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#location ApigatewayDocumentationPart#location}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.properties"></a>

```go
Properties *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}.

---

### ApigatewayDocumentationPartLocation <a name="ApigatewayDocumentationPartLocation" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaydocumentationpart"

&apigatewaydocumentationpart.ApigatewayDocumentationPartLocation {
	Method: *string,
	Name: *string,
	Path: *string,
	StatusCode: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#method ApigatewayDocumentationPart#method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#name ApigatewayDocumentationPart#name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#path ApigatewayDocumentationPart#path}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#status_code ApigatewayDocumentationPart#status_code}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#type ApigatewayDocumentationPart#type}. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#method ApigatewayDocumentationPart#method}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#name ApigatewayDocumentationPart#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#path ApigatewayDocumentationPart#path}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#status_code ApigatewayDocumentationPart#status_code}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#type ApigatewayDocumentationPart#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDocumentationPartLocationOutputReference <a name="ApigatewayDocumentationPartLocationOutputReference" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewaydocumentationpart"

apigatewaydocumentationpart.NewApigatewayDocumentationPartLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayDocumentationPartLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



