# `dataAwsccBedrockPrompt` Submodule <a name="`dataAwsccBedrockPrompt` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockPrompt <a name="DataAwsccBedrockPrompt" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt awscc_bedrock_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPrompt(scope Construct, id *string, config DataAwsccBedrockPromptConfig) DataAwsccBedrockPrompt
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig">DataAwsccBedrockPromptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig">DataAwsccBedrockPromptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.DataAwsccBedrockPrompt_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.DataAwsccBedrockPrompt_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.DataAwsccBedrockPrompt_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.DataAwsccBedrockPrompt_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockPrompt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockPrompt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.defaultVariant">DefaultVariant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.promptId">PromptId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.variants">Variants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList">DataAwsccBedrockPromptVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.customerEncryptionKeyArn"></a>

```go
func CustomerEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `DefaultVariant`<sup>Required</sup> <a name="DefaultVariant" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.defaultVariant"></a>

```go
func DefaultVariant() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PromptId`<sup>Required</sup> <a name="PromptId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.promptId"></a>

```go
func PromptId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Variants`<sup>Required</sup> <a name="Variants" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.variants"></a>

```go
func Variants() DataAwsccBedrockPromptVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList">DataAwsccBedrockPromptVariantsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockPromptConfig <a name="DataAwsccBedrockPromptConfig" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt#id DataAwsccBedrockPrompt#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockPromptVariants <a name="DataAwsccBedrockPromptVariants" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariants {

}
```


### DataAwsccBedrockPromptVariantsGenAiResource <a name="DataAwsccBedrockPromptVariantsGenAiResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsGenAiResource {

}
```


### DataAwsccBedrockPromptVariantsGenAiResourceAgent <a name="DataAwsccBedrockPromptVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent {

}
```


### DataAwsccBedrockPromptVariantsInferenceConfiguration <a name="DataAwsccBedrockPromptVariantsInferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsInferenceConfiguration {

}
```


### DataAwsccBedrockPromptVariantsInferenceConfigurationText <a name="DataAwsccBedrockPromptVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText {

}
```


### DataAwsccBedrockPromptVariantsMetadata <a name="DataAwsccBedrockPromptVariantsMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsMetadata {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfiguration <a name="DataAwsccBedrockPromptVariantsTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfiguration {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChat <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationText <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables {

}
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

&dataawsccbedrockprompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference <a name="DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">AgentIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent">DataAwsccBedrockPromptVariantsGenAiResourceAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIdentifier`<sup>Required</sup> <a name="AgentIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```go
func AgentIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsGenAiResourceAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent">DataAwsccBedrockPromptVariantsGenAiResourceAgent</a>

---


### DataAwsccBedrockPromptVariantsGenAiResourceOutputReference <a name="DataAwsccBedrockPromptVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsGenAiResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsGenAiResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.agent">Agent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource">DataAwsccBedrockPromptVariantsGenAiResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.agent"></a>

```go
func Agent() DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsGenAiResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource">DataAwsccBedrockPromptVariantsGenAiResource</a>

---


### DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference <a name="DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration">DataAwsccBedrockPromptVariantsInferenceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.text"></a>

```go
func Text() DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration">DataAwsccBedrockPromptVariantsInferenceConfiguration</a>

---


### DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences">StopSequences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText">DataAwsccBedrockPromptVariantsInferenceConfigurationText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `StopSequences`<sup>Required</sup> <a name="StopSequences" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```go
func StopSequences() *[]*string
```

- *Type:* *[]*string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsInferenceConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText">DataAwsccBedrockPromptVariantsInferenceConfigurationText</a>

---


### DataAwsccBedrockPromptVariantsList <a name="DataAwsccBedrockPromptVariantsList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVariantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVariantsMetadataList <a name="DataAwsccBedrockPromptVariantsMetadataList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVariantsMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVariantsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVariantsMetadataOutputReference <a name="DataAwsccBedrockPromptVariantsMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVariantsMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata">DataAwsccBedrockPromptVariantsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata">DataAwsccBedrockPromptVariantsMetadata</a>

---


### DataAwsccBedrockPromptVariantsOutputReference <a name="DataAwsccBedrockPromptVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVariantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.genAiResource">GenAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList">DataAwsccBedrockPromptVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateType">TemplateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants">DataAwsccBedrockPromptVariants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalModelRequestFields`<sup>Required</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.additionalModelRequestFields"></a>

```go
func AdditionalModelRequestFields() *string
```

- *Type:* *string

---

##### `GenAiResource`<sup>Required</sup> <a name="GenAiResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.genAiResource"></a>

```go
func GenAiResource() DataAwsccBedrockPromptVariantsGenAiResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceOutputReference</a>

---

##### `InferenceConfiguration`<sup>Required</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.inferenceConfiguration"></a>

```go
func InferenceConfiguration() DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.metadata"></a>

```go
func Metadata() DataAwsccBedrockPromptVariantsMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList">DataAwsccBedrockPromptVariantsMetadataList</a>

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateConfiguration"></a>

```go
func TemplateConfiguration() DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference</a>

---

##### `TemplateType`<sup>Required</sup> <a name="TemplateType" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateType"></a>

```go
func TemplateType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariants
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants">DataAwsccBedrockPromptVariants</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```go
func CachePoint() DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```go
func Content() DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">ToolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVariantsTemplateConfigurationChat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```go
func InputVariables() DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```go
func Messages() DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList</a>

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```go
func SystemAttribute() DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList</a>

---

##### `ToolConfiguration`<sup>Required</sup> <a name="ToolConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```go
func ToolConfiguration() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVariantsTemplateConfigurationChat</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```go
func CachePoint() DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">ToolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">Tools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolChoice`<sup>Required</sup> <a name="ToolChoice" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```go
func ToolChoice() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```go
func Tools() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">Any</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">Auto</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">Tool</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Any`<sup>Required</sup> <a name="Any" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```go
func Any() *string
```

- *Type:* *string

---

##### `Auto`<sup>Required</sup> <a name="Auto" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```go
func Auto() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```go
func Tool() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">ToolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```go
func CachePoint() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `ToolSpec`<sup>Required</sup> <a name="ToolSpec" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```go
func ToolSpec() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">InputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```go
func InputSchema() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.chat">Chat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration">DataAwsccBedrockPromptVariantsTemplateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Chat`<sup>Required</sup> <a name="Chat" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.chat"></a>

```go
func Chat() DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.text"></a>

```go
func Text() DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration">DataAwsccBedrockPromptVariantsTemplateConfiguration</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location">TextS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText">DataAwsccBedrockPromptVariantsTemplateConfigurationText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```go
func CachePoint() DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```go
func InputVariables() DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `TextS3Location`<sup>Required</sup> <a name="TextS3Location" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location"></a>

```go
func TextS3Location() DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText">DataAwsccBedrockPromptVariantsTemplateConfigurationText</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockprompt"

dataawsccbedrockprompt.NewDataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---



