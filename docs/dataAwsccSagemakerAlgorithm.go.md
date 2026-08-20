# `dataAwsccSagemakerAlgorithm` Submodule <a name="`dataAwsccSagemakerAlgorithm` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerAlgorithm <a name="DataAwsccSagemakerAlgorithm" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/sagemaker_algorithm awscc_sagemaker_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithm(scope Construct, id *string, config DataAwsccSagemakerAlgorithmConfig) DataAwsccSagemakerAlgorithm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig">DataAwsccSagemakerAlgorithmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig">DataAwsccSagemakerAlgorithmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithm_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSagemakerAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSagemakerAlgorithm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSagemakerAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmArn">AlgorithmArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmDescription">AlgorithmDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmName">AlgorithmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.certifyForMarketplace">CertifyForMarketplace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.inferenceSpecification">InferenceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList">DataAwsccSagemakerAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.trainingSpecification">TrainingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AlgorithmArn`<sup>Required</sup> <a name="AlgorithmArn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmArn"></a>

```go
func AlgorithmArn() *string
```

- *Type:* *string

---

##### `AlgorithmDescription`<sup>Required</sup> <a name="AlgorithmDescription" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmDescription"></a>

```go
func AlgorithmDescription() *string
```

- *Type:* *string

---

##### `AlgorithmName`<sup>Required</sup> <a name="AlgorithmName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.algorithmName"></a>

```go
func AlgorithmName() *string
```

- *Type:* *string

---

##### `CertifyForMarketplace`<sup>Required</sup> <a name="CertifyForMarketplace" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.certifyForMarketplace"></a>

```go
func CertifyForMarketplace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `InferenceSpecification`<sup>Required</sup> <a name="InferenceSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.inferenceSpecification"></a>

```go
func InferenceSpecification() DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tags"></a>

```go
func Tags() DataAwsccSagemakerAlgorithmTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList">DataAwsccSagemakerAlgorithmTagsList</a>

---

##### `TrainingSpecification`<sup>Required</sup> <a name="TrainingSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.trainingSpecification"></a>

```go
func TrainingSpecification() DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerAlgorithmConfig <a name="DataAwsccSagemakerAlgorithmConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/sagemaker_algorithm#id DataAwsccSagemakerAlgorithm#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerAlgorithmInferenceSpecification <a name="DataAwsccSagemakerAlgorithmInferenceSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification {

}
```


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainers <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers {

}
```


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput {

}
```


### DataAwsccSagemakerAlgorithmTags <a name="DataAwsccSagemakerAlgorithmTags" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTags {

}
```


### DataAwsccSagemakerAlgorithmTrainingSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification {

}
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions {

}
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters {

}
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange {

}
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification {

}
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification {

}
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification {

}
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics {

}
```


### DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

&dataawsccsagemakeralgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmInferenceSpecificationContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig">DataInputConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInputConfig`<sup>Required</sup> <a name="DataInputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig"></a>

```go
func DataInputConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---


### DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment">Environment</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion">FrameworkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint">IsCheckpoint</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput">ModelInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName">NearestModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers">DataAwsccSagemakerAlgorithmInferenceSpecificationContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerHostname`<sup>Required</sup> <a name="ContainerHostname" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname"></a>

```go
func ContainerHostname() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment"></a>

```go
func Environment() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `FrameworkVersion`<sup>Required</sup> <a name="FrameworkVersion" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion"></a>

```go
func FrameworkVersion() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest"></a>

```go
func ImageDigest() *string
```

- *Type:* *string

---

##### `IsCheckpoint`<sup>Required</sup> <a name="IsCheckpoint" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint"></a>

```go
func IsCheckpoint() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ModelInput`<sup>Required</sup> <a name="ModelInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput"></a>

```go
func ModelInput() DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a>

---

##### `NearestModelName`<sup>Required</sup> <a name="NearestModelName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName"></a>

```go
func NearestModelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmInferenceSpecificationContainers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainers">DataAwsccSagemakerAlgorithmInferenceSpecificationContainers</a>

---


### DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes">SupportedContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes">SupportedRealtimeInferenceInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes">SupportedResponseMimeTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes">SupportedTransformInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification">DataAwsccSagemakerAlgorithmInferenceSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.containers"></a>

```go
func Containers() DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList">DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList</a>

---

##### `SupportedContentTypes`<sup>Required</sup> <a name="SupportedContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes"></a>

```go
func SupportedContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedRealtimeInferenceInstanceTypes`<sup>Required</sup> <a name="SupportedRealtimeInferenceInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes"></a>

```go
func SupportedRealtimeInferenceInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedResponseMimeTypes`<sup>Required</sup> <a name="SupportedResponseMimeTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes"></a>

```go
func SupportedResponseMimeTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedTransformInstanceTypes`<sup>Required</sup> <a name="SupportedTransformInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes"></a>

```go
func SupportedTransformInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmInferenceSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmInferenceSpecification">DataAwsccSagemakerAlgorithmInferenceSpecification</a>

---


### DataAwsccSagemakerAlgorithmTagsList <a name="DataAwsccSagemakerAlgorithmTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAlgorithmTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAlgorithmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAlgorithmTagsOutputReference <a name="DataAwsccSagemakerAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAlgorithmTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags">DataAwsccSagemakerAlgorithmTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTags">DataAwsccSagemakerAlgorithmTags</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions">MetricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters">SupportedHyperParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes">SupportedTrainingInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics">SupportedTuningJobObjectiveMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining">SupportsDistributedTraining</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels">TrainingChannels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage">TrainingImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest">TrainingImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification">DataAwsccSagemakerAlgorithmTrainingSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDefinitions`<sup>Required</sup> <a name="MetricDefinitions" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions"></a>

```go
func MetricDefinitions() DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a>

---

##### `SupportedHyperParameters`<sup>Required</sup> <a name="SupportedHyperParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters"></a>

```go
func SupportedHyperParameters() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a>

---

##### `SupportedTrainingInstanceTypes`<sup>Required</sup> <a name="SupportedTrainingInstanceTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes"></a>

```go
func SupportedTrainingInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedTuningJobObjectiveMetrics`<sup>Required</sup> <a name="SupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics"></a>

```go
func SupportedTuningJobObjectiveMetrics() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a>

---

##### `SupportsDistributedTraining`<sup>Required</sup> <a name="SupportsDistributedTraining" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining"></a>

```go
func SupportsDistributedTraining() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TrainingChannels`<sup>Required</sup> <a name="TrainingChannels" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels"></a>

```go
func TrainingChannels() DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a>

---

##### `TrainingImage`<sup>Required</sup> <a name="TrainingImage" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage"></a>

```go
func TrainingImage() *string
```

- *Type:* *string

---

##### `TrainingImageDigest`<sup>Required</sup> <a name="TrainingImageDigest" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest"></a>

```go
func TrainingImageDigest() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTrainingSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecification">DataAwsccSagemakerAlgorithmTrainingSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired">IsRequired</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable">IsTunable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range">Range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired"></a>

```go
func IsRequired() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsTunable`<sup>Required</sup> <a name="IsTunable" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable"></a>

```go
func IsTunable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range"></a>

```go
func Range() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification">CategoricalParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification">ContinuousParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification">IntegerParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoricalParameterRangeSpecification`<sup>Required</sup> <a name="CategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification"></a>

```go
func CategoricalParameterRangeSpecification() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a>

---

##### `ContinuousParameterRangeSpecification`<sup>Required</sup> <a name="ContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification"></a>

```go
func ContinuousParameterRangeSpecification() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a>

---

##### `IntegerParameterRangeSpecification`<sup>Required</sup> <a name="IntegerParameterRangeSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification"></a>

```go
func IntegerParameterRangeSpecification() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference <a name="DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeralgorithm"

dataawsccsagemakeralgorithm.NewDataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired">IsRequired</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes">SupportedCompressionTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes">SupportedContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes">SupportedInputModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired"></a>

```go
func IsRequired() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SupportedCompressionTypes`<sup>Required</sup> <a name="SupportedCompressionTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes"></a>

```go
func SupportedCompressionTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedContentTypes`<sup>Required</sup> <a name="SupportedContentTypes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes"></a>

```go
func SupportedContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedInputModes`<sup>Required</sup> <a name="SupportedInputModes" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes"></a>

```go
func SupportedInputModes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAlgorithm.DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels">DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels</a>

---



