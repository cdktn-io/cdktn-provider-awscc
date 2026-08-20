# `dataAwsccBedrockIntelligentPromptRouter` Submodule <a name="`dataAwsccBedrockIntelligentPromptRouter` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockIntelligentPromptRouter <a name="DataAwsccBedrockIntelligentPromptRouter" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.NewDataAwsccBedrockIntelligentPromptRouter(scope Construct, id *string, config DataAwsccBedrockIntelligentPromptRouterConfig) DataAwsccBedrockIntelligentPromptRouter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig">DataAwsccBedrockIntelligentPromptRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig">DataAwsccBedrockIntelligentPromptRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.DataAwsccBedrockIntelligentPromptRouter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.DataAwsccBedrockIntelligentPromptRouter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.DataAwsccBedrockIntelligentPromptRouter_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.DataAwsccBedrockIntelligentPromptRouter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockIntelligentPromptRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockIntelligentPromptRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrock_intelligent_prompt_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockIntelligentPromptRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fallbackModel">FallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference">DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.models">Models</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList">DataAwsccBedrockIntelligentPromptRouterModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterArn">PromptRouterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterName">PromptRouterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.routingCriteria">RoutingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference">DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList">DataAwsccBedrockIntelligentPromptRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FallbackModel`<sup>Required</sup> <a name="FallbackModel" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.fallbackModel"></a>

```go
func FallbackModel() DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference">DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference</a>

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.models"></a>

```go
func Models() DataAwsccBedrockIntelligentPromptRouterModelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList">DataAwsccBedrockIntelligentPromptRouterModelsList</a>

---

##### `PromptRouterArn`<sup>Required</sup> <a name="PromptRouterArn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterArn"></a>

```go
func PromptRouterArn() *string
```

- *Type:* *string

---

##### `PromptRouterName`<sup>Required</sup> <a name="PromptRouterName" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.promptRouterName"></a>

```go
func PromptRouterName() *string
```

- *Type:* *string

---

##### `RoutingCriteria`<sup>Required</sup> <a name="RoutingCriteria" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.routingCriteria"></a>

```go
func RoutingCriteria() DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference">DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tags"></a>

```go
func Tags() DataAwsccBedrockIntelligentPromptRouterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList">DataAwsccBedrockIntelligentPromptRouterTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockIntelligentPromptRouterConfig <a name="DataAwsccBedrockIntelligentPromptRouterConfig" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

&dataawsccbedrockintelligentpromptrouter.DataAwsccBedrockIntelligentPromptRouterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrock_intelligent_prompt_router#id DataAwsccBedrockIntelligentPromptRouter#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockIntelligentPromptRouterFallbackModel <a name="DataAwsccBedrockIntelligentPromptRouterFallbackModel" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

&dataawsccbedrockintelligentpromptrouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel {

}
```


### DataAwsccBedrockIntelligentPromptRouterModels <a name="DataAwsccBedrockIntelligentPromptRouterModels" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

&dataawsccbedrockintelligentpromptrouter.DataAwsccBedrockIntelligentPromptRouterModels {

}
```


### DataAwsccBedrockIntelligentPromptRouterRoutingCriteria <a name="DataAwsccBedrockIntelligentPromptRouterRoutingCriteria" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

&dataawsccbedrockintelligentpromptrouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria {

}
```


### DataAwsccBedrockIntelligentPromptRouterTags <a name="DataAwsccBedrockIntelligentPromptRouterTags" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

&dataawsccbedrockintelligentpromptrouter.DataAwsccBedrockIntelligentPromptRouterTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.NewDataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel">DataAwsccBedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockIntelligentPromptRouterFallbackModel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterFallbackModel">DataAwsccBedrockIntelligentPromptRouterFallbackModel</a>

---


### DataAwsccBedrockIntelligentPromptRouterModelsList <a name="DataAwsccBedrockIntelligentPromptRouterModelsList" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.NewDataAwsccBedrockIntelligentPromptRouterModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockIntelligentPromptRouterModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockIntelligentPromptRouterModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockIntelligentPromptRouterModelsOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterModelsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.NewDataAwsccBedrockIntelligentPromptRouterModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockIntelligentPromptRouterModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels">DataAwsccBedrockIntelligentPromptRouterModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockIntelligentPromptRouterModels
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterModels">DataAwsccBedrockIntelligentPromptRouterModels</a>

---


### DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.NewDataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference">ResponseQualityDifference</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria">DataAwsccBedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResponseQualityDifference`<sup>Required</sup> <a name="ResponseQualityDifference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference"></a>

```go
func ResponseQualityDifference() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockIntelligentPromptRouterRoutingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterRoutingCriteria">DataAwsccBedrockIntelligentPromptRouterRoutingCriteria</a>

---


### DataAwsccBedrockIntelligentPromptRouterTagsList <a name="DataAwsccBedrockIntelligentPromptRouterTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.NewDataAwsccBedrockIntelligentPromptRouterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockIntelligentPromptRouterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockIntelligentPromptRouterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockIntelligentPromptRouterTagsOutputReference <a name="DataAwsccBedrockIntelligentPromptRouterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockintelligentpromptrouter"

dataawsccbedrockintelligentpromptrouter.NewDataAwsccBedrockIntelligentPromptRouterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockIntelligentPromptRouterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags">DataAwsccBedrockIntelligentPromptRouterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockIntelligentPromptRouterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockIntelligentPromptRouter.DataAwsccBedrockIntelligentPromptRouterTags">DataAwsccBedrockIntelligentPromptRouterTags</a>

---



