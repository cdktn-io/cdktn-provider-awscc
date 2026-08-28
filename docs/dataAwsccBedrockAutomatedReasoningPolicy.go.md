# `dataAwsccBedrockAutomatedReasoningPolicy` Submodule <a name="`dataAwsccBedrockAutomatedReasoningPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockAutomatedReasoningPolicy <a name="DataAwsccBedrockAutomatedReasoningPolicy" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_automated_reasoning_policy awscc_bedrock_automated_reasoning_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicy(scope Construct, id *string, config DataAwsccBedrockAutomatedReasoningPolicyConfig) DataAwsccBedrockAutomatedReasoningPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig">DataAwsccBedrockAutomatedReasoningPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig">DataAwsccBedrockAutomatedReasoningPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockAutomatedReasoningPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockAutomatedReasoningPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_automated_reasoning_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockAutomatedReasoningPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.definitionHash">DefinitionHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forceDelete">ForceDelete</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyDefinition">PolicyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList">DataAwsccBedrockAutomatedReasoningPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DefinitionHash`<sup>Required</sup> <a name="DefinitionHash" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.definitionHash"></a>

```go
func DefinitionHash() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forceDelete"></a>

```go
func ForceDelete() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `PolicyDefinition`<sup>Required</sup> <a name="PolicyDefinition" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyDefinition"></a>

```go
func PolicyDefinition() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tags"></a>

```go
func Tags() DataAwsccBedrockAutomatedReasoningPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList">DataAwsccBedrockAutomatedReasoningPolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockAutomatedReasoningPolicyConfig <a name="DataAwsccBedrockAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

&dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_automated_reasoning_policy#id DataAwsccBedrockAutomatedReasoningPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

&dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition {

}
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

&dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules {

}
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

&dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes {

}
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

&dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues {

}
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

&dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables {

}
```


### DataAwsccBedrockAutomatedReasoningPolicyTags <a name="DataAwsccBedrockAutomatedReasoningPolicyTags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

&dataawsccbedrockautomatedreasoningpolicy.DataAwsccBedrockAutomatedReasoningPolicyTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types">Types</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules"></a>

```go
func Rules() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a>

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types"></a>

```go
func Types() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables"></a>

```go
func Variables() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression">AlternateExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlternateExpression`<sup>Required</sup> <a name="AlternateExpression" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression"></a>

```go
func AlternateExpression() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values"></a>

```go
func Values() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyTagsList <a name="DataAwsccBedrockAutomatedReasoningPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockAutomatedReasoningPolicyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockautomatedreasoningpolicy"

dataawsccbedrockautomatedreasoningpolicy.NewDataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags">DataAwsccBedrockAutomatedReasoningPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockAutomatedReasoningPolicyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags">DataAwsccBedrockAutomatedReasoningPolicyTags</a>

---



