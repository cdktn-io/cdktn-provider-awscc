# `dataAwsccBedrockRetrievalInstruction` Submodule <a name="`dataAwsccBedrockRetrievalInstruction` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockRetrievalInstruction <a name="DataAwsccBedrockRetrievalInstruction" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction awscc_bedrock_retrieval_instruction}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

dataawsccbedrockretrievalinstruction.NewDataAwsccBedrockRetrievalInstruction(scope Construct, id *string, config DataAwsccBedrockRetrievalInstructionConfig) DataAwsccBedrockRetrievalInstruction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig">DataAwsccBedrockRetrievalInstructionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig">DataAwsccBedrockRetrievalInstructionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

dataawsccbedrockretrievalinstruction.DataAwsccBedrockRetrievalInstruction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

dataawsccbedrockretrievalinstruction.DataAwsccBedrockRetrievalInstruction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

dataawsccbedrockretrievalinstruction.DataAwsccBedrockRetrievalInstruction_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

dataawsccbedrockretrievalinstruction.DataAwsccBedrockRetrievalInstruction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockRetrievalInstruction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockRetrievalInstruction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockRetrievalInstruction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.instruction">Instruction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference">DataAwsccBedrockRetrievalInstructionInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lastTransitionStatus">LastTransitionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.retrievalInstructionId">RetrievalInstructionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList">DataAwsccBedrockRetrievalInstructionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.customerEncryptionKeyArn"></a>

```go
func CustomerEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.instruction"></a>

```go
func Instruction() DataAwsccBedrockRetrievalInstructionInstructionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference">DataAwsccBedrockRetrievalInstructionInstructionOutputReference</a>

---

##### `LastTransitionStatus`<sup>Required</sup> <a name="LastTransitionStatus" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lastTransitionStatus"></a>

```go
func LastTransitionStatus() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetrievalInstructionId`<sup>Required</sup> <a name="RetrievalInstructionId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.retrievalInstructionId"></a>

```go
func RetrievalInstructionId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tags"></a>

```go
func Tags() DataAwsccBedrockRetrievalInstructionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList">DataAwsccBedrockRetrievalInstructionTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockRetrievalInstructionConfig <a name="DataAwsccBedrockRetrievalInstructionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

&dataawsccbedrockretrievalinstruction.DataAwsccBedrockRetrievalInstructionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction#id DataAwsccBedrockRetrievalInstruction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockRetrievalInstructionInstruction <a name="DataAwsccBedrockRetrievalInstructionInstruction" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

&dataawsccbedrockretrievalinstruction.DataAwsccBedrockRetrievalInstructionInstruction {

}
```


### DataAwsccBedrockRetrievalInstructionTags <a name="DataAwsccBedrockRetrievalInstructionTags" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

&dataawsccbedrockretrievalinstruction.DataAwsccBedrockRetrievalInstructionTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockRetrievalInstructionInstructionOutputReference <a name="DataAwsccBedrockRetrievalInstructionInstructionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

dataawsccbedrockretrievalinstruction.NewDataAwsccBedrockRetrievalInstructionInstructionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockRetrievalInstructionInstructionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerFormat">AnswerFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy">AnswerPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.persona">Persona</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance">RetrievalGuidance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction">DataAwsccBedrockRetrievalInstructionInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnswerFormat`<sup>Required</sup> <a name="AnswerFormat" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerFormat"></a>

```go
func AnswerFormat() *string
```

- *Type:* *string

---

##### `AnswerPolicy`<sup>Required</sup> <a name="AnswerPolicy" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy"></a>

```go
func AnswerPolicy() *string
```

- *Type:* *string

---

##### `Persona`<sup>Required</sup> <a name="Persona" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.persona"></a>

```go
func Persona() *string
```

- *Type:* *string

---

##### `RetrievalGuidance`<sup>Required</sup> <a name="RetrievalGuidance" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance"></a>

```go
func RetrievalGuidance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockRetrievalInstructionInstruction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction">DataAwsccBedrockRetrievalInstructionInstruction</a>

---


### DataAwsccBedrockRetrievalInstructionTagsList <a name="DataAwsccBedrockRetrievalInstructionTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

dataawsccbedrockretrievalinstruction.NewDataAwsccBedrockRetrievalInstructionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockRetrievalInstructionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockRetrievalInstructionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockRetrievalInstructionTagsOutputReference <a name="DataAwsccBedrockRetrievalInstructionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccbedrockretrievalinstruction"

dataawsccbedrockretrievalinstruction.NewDataAwsccBedrockRetrievalInstructionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockRetrievalInstructionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags">DataAwsccBedrockRetrievalInstructionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockRetrievalInstructionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags">DataAwsccBedrockRetrievalInstructionTags</a>

---



