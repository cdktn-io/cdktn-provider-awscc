# `dataAwsccLambdaMicrovmImage` Submodule <a name="`dataAwsccLambdaMicrovmImage` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaMicrovmImage <a name="DataAwsccLambdaMicrovmImage" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lambda_microvm_image awscc_lambda_microvm_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImage(scope Construct, id *string, config DataAwsccLambdaMicrovmImageConfig) DataAwsccLambdaMicrovmImage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig">DataAwsccLambdaMicrovmImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig">DataAwsccLambdaMicrovmImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaMicrovmImage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLambdaMicrovmImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLambdaMicrovmImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLambdaMicrovmImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lambda_microvm_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaMicrovmImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.additionalOsCapabilities">AdditionalOsCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.baseImageArn">BaseImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.baseImageVersion">BaseImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.buildRoleArn">BuildRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.codeArtifact">CodeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference">DataAwsccLambdaMicrovmImageCodeArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.cpuConfigurations">CpuConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList">DataAwsccLambdaMicrovmImageCpuConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.environmentVariables">EnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList">DataAwsccLambdaMicrovmImageEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.hooks">Hooks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference">DataAwsccLambdaMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.imageArn">ImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.latestActiveImageVersion">LatestActiveImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.latestFailedImageVersion">LatestFailedImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference">DataAwsccLambdaMicrovmImageLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList">DataAwsccLambdaMicrovmImageResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList">DataAwsccLambdaMicrovmImageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdditionalOsCapabilities`<sup>Required</sup> <a name="AdditionalOsCapabilities" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.additionalOsCapabilities"></a>

```go
func AdditionalOsCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.baseImageArn"></a>

```go
func BaseImageArn() *string
```

- *Type:* *string

---

##### `BaseImageVersion`<sup>Required</sup> <a name="BaseImageVersion" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.baseImageVersion"></a>

```go
func BaseImageVersion() *string
```

- *Type:* *string

---

##### `BuildRoleArn`<sup>Required</sup> <a name="BuildRoleArn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.buildRoleArn"></a>

```go
func BuildRoleArn() *string
```

- *Type:* *string

---

##### `CodeArtifact`<sup>Required</sup> <a name="CodeArtifact" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.codeArtifact"></a>

```go
func CodeArtifact() DataAwsccLambdaMicrovmImageCodeArtifactOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference">DataAwsccLambdaMicrovmImageCodeArtifactOutputReference</a>

---

##### `CpuConfigurations`<sup>Required</sup> <a name="CpuConfigurations" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.cpuConfigurations"></a>

```go
func CpuConfigurations() DataAwsccLambdaMicrovmImageCpuConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList">DataAwsccLambdaMicrovmImageCpuConfigurationsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.egressNetworkConnectors"></a>

```go
func EgressNetworkConnectors() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.environmentVariables"></a>

```go
func EnvironmentVariables() DataAwsccLambdaMicrovmImageEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList">DataAwsccLambdaMicrovmImageEnvironmentVariablesList</a>

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.hooks"></a>

```go
func Hooks() DataAwsccLambdaMicrovmImageHooksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference">DataAwsccLambdaMicrovmImageHooksOutputReference</a>

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.imageArn"></a>

```go
func ImageArn() *string
```

- *Type:* *string

---

##### `LatestActiveImageVersion`<sup>Required</sup> <a name="LatestActiveImageVersion" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.latestActiveImageVersion"></a>

```go
func LatestActiveImageVersion() *string
```

- *Type:* *string

---

##### `LatestFailedImageVersion`<sup>Required</sup> <a name="LatestFailedImageVersion" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.latestFailedImageVersion"></a>

```go
func LatestFailedImageVersion() *string
```

- *Type:* *string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.logging"></a>

```go
func Logging() DataAwsccLambdaMicrovmImageLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference">DataAwsccLambdaMicrovmImageLoggingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.resources"></a>

```go
func Resources() DataAwsccLambdaMicrovmImageResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList">DataAwsccLambdaMicrovmImageResourcesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.tags"></a>

```go
func Tags() DataAwsccLambdaMicrovmImageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList">DataAwsccLambdaMicrovmImageTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaMicrovmImageCodeArtifact <a name="DataAwsccLambdaMicrovmImageCodeArtifact" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageCodeArtifact {

}
```


### DataAwsccLambdaMicrovmImageConfig <a name="DataAwsccLambdaMicrovmImageConfig" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lambda_microvm_image#id DataAwsccLambdaMicrovmImage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaMicrovmImageCpuConfigurations <a name="DataAwsccLambdaMicrovmImageCpuConfigurations" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageCpuConfigurations {

}
```


### DataAwsccLambdaMicrovmImageEnvironmentVariables <a name="DataAwsccLambdaMicrovmImageEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageEnvironmentVariables {

}
```


### DataAwsccLambdaMicrovmImageHooks <a name="DataAwsccLambdaMicrovmImageHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageHooks {

}
```


### DataAwsccLambdaMicrovmImageHooksMicrovmHooks <a name="DataAwsccLambdaMicrovmImageHooksMicrovmHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageHooksMicrovmHooks {

}
```


### DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks <a name="DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks {

}
```


### DataAwsccLambdaMicrovmImageLogging <a name="DataAwsccLambdaMicrovmImageLogging" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageLogging {

}
```


### DataAwsccLambdaMicrovmImageLoggingCloudwatch <a name="DataAwsccLambdaMicrovmImageLoggingCloudwatch" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageLoggingCloudwatch {

}
```


### DataAwsccLambdaMicrovmImageResources <a name="DataAwsccLambdaMicrovmImageResources" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageResources {

}
```


### DataAwsccLambdaMicrovmImageTags <a name="DataAwsccLambdaMicrovmImageTags" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

&dataawscclambdamicrovmimage.DataAwsccLambdaMicrovmImageTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaMicrovmImageCodeArtifactOutputReference <a name="DataAwsccLambdaMicrovmImageCodeArtifactOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageCodeArtifactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaMicrovmImageCodeArtifactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifact">DataAwsccLambdaMicrovmImageCodeArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageCodeArtifact
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCodeArtifact">DataAwsccLambdaMicrovmImageCodeArtifact</a>

---


### DataAwsccLambdaMicrovmImageCpuConfigurationsList <a name="DataAwsccLambdaMicrovmImageCpuConfigurationsList" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageCpuConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLambdaMicrovmImageCpuConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference <a name="DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurations">DataAwsccLambdaMicrovmImageCpuConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageCpuConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageCpuConfigurations">DataAwsccLambdaMicrovmImageCpuConfigurations</a>

---


### DataAwsccLambdaMicrovmImageEnvironmentVariablesList <a name="DataAwsccLambdaMicrovmImageEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLambdaMicrovmImageEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference <a name="DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariables">DataAwsccLambdaMicrovmImageEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageEnvironmentVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageEnvironmentVariables">DataAwsccLambdaMicrovmImageEnvironmentVariables</a>

---


### DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference <a name="DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume">Resume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">ResumeTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run">Run</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">RunTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend">Suspend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">SuspendTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate">Terminate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">TerminateTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooks">DataAwsccLambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Resume`<sup>Required</sup> <a name="Resume" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume"></a>

```go
func Resume() *string
```

- *Type:* *string

---

##### `ResumeTimeoutInSeconds`<sup>Required</sup> <a name="ResumeTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```go
func ResumeTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run"></a>

```go
func Run() *string
```

- *Type:* *string

---

##### `RunTimeoutInSeconds`<sup>Required</sup> <a name="RunTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```go
func RunTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend"></a>

```go
func Suspend() *string
```

- *Type:* *string

---

##### `SuspendTimeoutInSeconds`<sup>Required</sup> <a name="SuspendTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```go
func SuspendTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Terminate`<sup>Required</sup> <a name="Terminate" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate"></a>

```go
func Terminate() *string
```

- *Type:* *string

---

##### `TerminateTimeoutInSeconds`<sup>Required</sup> <a name="TerminateTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```go
func TerminateTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageHooksMicrovmHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooks">DataAwsccLambdaMicrovmImageHooksMicrovmHooks</a>

---


### DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference <a name="DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready">Ready</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">ReadyTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate">Validate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">ValidateTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks">DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready"></a>

```go
func Ready() *string
```

- *Type:* *string

---

##### `ReadyTimeoutInSeconds`<sup>Required</sup> <a name="ReadyTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```go
func ReadyTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate"></a>

```go
func Validate() *string
```

- *Type:* *string

---

##### `ValidateTimeoutInSeconds`<sup>Required</sup> <a name="ValidateTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```go
func ValidateTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks">DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks</a>

---


### DataAwsccLambdaMicrovmImageHooksOutputReference <a name="DataAwsccLambdaMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaMicrovmImageHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.microvmHooks">MicrovmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference">DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.microvmImageHooks">MicrovmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference">DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooks">DataAwsccLambdaMicrovmImageHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MicrovmHooks`<sup>Required</sup> <a name="MicrovmHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.microvmHooks"></a>

```go
func MicrovmHooks() DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference">DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference</a>

---

##### `MicrovmImageHooks`<sup>Required</sup> <a name="MicrovmImageHooks" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.microvmImageHooks"></a>

```go
func MicrovmImageHooks() DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference">DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageHooks">DataAwsccLambdaMicrovmImageHooks</a>

---


### DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference <a name="DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream">LogStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatch">DataAwsccLambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStream`<sup>Required</sup> <a name="LogStream" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream"></a>

```go
func LogStream() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageLoggingCloudwatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatch">DataAwsccLambdaMicrovmImageLoggingCloudwatch</a>

---


### DataAwsccLambdaMicrovmImageLoggingOutputReference <a name="DataAwsccLambdaMicrovmImageLoggingOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaMicrovmImageLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference">DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLogging">DataAwsccLambdaMicrovmImageLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.cloudwatch"></a>

```go
func Cloudwatch() DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference">DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageLogging
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageLogging">DataAwsccLambdaMicrovmImageLogging</a>

---


### DataAwsccLambdaMicrovmImageResourcesList <a name="DataAwsccLambdaMicrovmImageResourcesList" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLambdaMicrovmImageResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.get"></a>

```go
func Get(index *f64) DataAwsccLambdaMicrovmImageResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLambdaMicrovmImageResourcesOutputReference <a name="DataAwsccLambdaMicrovmImageResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLambdaMicrovmImageResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB">MinimumMemoryInMiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResources">DataAwsccLambdaMicrovmImageResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinimumMemoryInMiB`<sup>Required</sup> <a name="MinimumMemoryInMiB" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB"></a>

```go
func MinimumMemoryInMiB() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageResources">DataAwsccLambdaMicrovmImageResources</a>

---


### DataAwsccLambdaMicrovmImageTagsList <a name="DataAwsccLambdaMicrovmImageTagsList" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLambdaMicrovmImageTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLambdaMicrovmImageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLambdaMicrovmImageTagsOutputReference <a name="DataAwsccLambdaMicrovmImageTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclambdamicrovmimage"

dataawscclambdamicrovmimage.NewDataAwsccLambdaMicrovmImageTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLambdaMicrovmImageTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTags">DataAwsccLambdaMicrovmImageTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaMicrovmImageTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaMicrovmImage.DataAwsccLambdaMicrovmImageTags">DataAwsccLambdaMicrovmImageTags</a>

---



