# `dataAwsccBedrockApplicationInferenceProfile` Submodule <a name="`dataAwsccBedrockApplicationInferenceProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockApplicationInferenceProfile <a name="DataAwsccBedrockApplicationInferenceProfile" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.NewDataAwsccBedrockApplicationInferenceProfile(scope Construct, id *string, config DataAwsccBedrockApplicationInferenceProfileConfig) DataAwsccBedrockApplicationInferenceProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig">DataAwsccBedrockApplicationInferenceProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig">DataAwsccBedrockApplicationInferenceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.DataAwsccBedrockApplicationInferenceProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.DataAwsccBedrockApplicationInferenceProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.DataAwsccBedrockApplicationInferenceProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.DataAwsccBedrockApplicationInferenceProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockApplicationInferenceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockApplicationInferenceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_application_inference_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockApplicationInferenceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileArn">InferenceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileId">InferenceProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileIdentifier">InferenceProfileIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileName">InferenceProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.models">Models</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList">DataAwsccBedrockApplicationInferenceProfileModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.modelSource">ModelSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference">DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList">DataAwsccBedrockApplicationInferenceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InferenceProfileArn`<sup>Required</sup> <a name="InferenceProfileArn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileArn"></a>

```go
func InferenceProfileArn() *string
```

- *Type:* *string

---

##### `InferenceProfileId`<sup>Required</sup> <a name="InferenceProfileId" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileId"></a>

```go
func InferenceProfileId() *string
```

- *Type:* *string

---

##### `InferenceProfileIdentifier`<sup>Required</sup> <a name="InferenceProfileIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileIdentifier"></a>

```go
func InferenceProfileIdentifier() *string
```

- *Type:* *string

---

##### `InferenceProfileName`<sup>Required</sup> <a name="InferenceProfileName" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileName"></a>

```go
func InferenceProfileName() *string
```

- *Type:* *string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.models"></a>

```go
func Models() DataAwsccBedrockApplicationInferenceProfileModelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList">DataAwsccBedrockApplicationInferenceProfileModelsList</a>

---

##### `ModelSource`<sup>Required</sup> <a name="ModelSource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.modelSource"></a>

```go
func ModelSource() DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference">DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tags"></a>

```go
func Tags() DataAwsccBedrockApplicationInferenceProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList">DataAwsccBedrockApplicationInferenceProfileTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockApplicationInferenceProfileConfig <a name="DataAwsccBedrockApplicationInferenceProfileConfig" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

&dataawsccbedrockapplicationinferenceprofile.DataAwsccBedrockApplicationInferenceProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_application_inference_profile#id DataAwsccBedrockApplicationInferenceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockApplicationInferenceProfileModels <a name="DataAwsccBedrockApplicationInferenceProfileModels" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

&dataawsccbedrockapplicationinferenceprofile.DataAwsccBedrockApplicationInferenceProfileModels {

}
```


### DataAwsccBedrockApplicationInferenceProfileModelSource <a name="DataAwsccBedrockApplicationInferenceProfileModelSource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

&dataawsccbedrockapplicationinferenceprofile.DataAwsccBedrockApplicationInferenceProfileModelSource {

}
```


### DataAwsccBedrockApplicationInferenceProfileTags <a name="DataAwsccBedrockApplicationInferenceProfileTags" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

&dataawsccbedrockapplicationinferenceprofile.DataAwsccBedrockApplicationInferenceProfileTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockApplicationInferenceProfileModelsList <a name="DataAwsccBedrockApplicationInferenceProfileModelsList" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.NewDataAwsccBedrockApplicationInferenceProfileModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockApplicationInferenceProfileModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockApplicationInferenceProfileModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference <a name="DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.NewDataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom">CopyFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource">DataAwsccBedrockApplicationInferenceProfileModelSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CopyFrom`<sup>Required</sup> <a name="CopyFrom" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom"></a>

```go
func CopyFrom() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockApplicationInferenceProfileModelSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource">DataAwsccBedrockApplicationInferenceProfileModelSource</a>

---


### DataAwsccBedrockApplicationInferenceProfileModelsOutputReference <a name="DataAwsccBedrockApplicationInferenceProfileModelsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.NewDataAwsccBedrockApplicationInferenceProfileModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockApplicationInferenceProfileModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels">DataAwsccBedrockApplicationInferenceProfileModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockApplicationInferenceProfileModels
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels">DataAwsccBedrockApplicationInferenceProfileModels</a>

---


### DataAwsccBedrockApplicationInferenceProfileTagsList <a name="DataAwsccBedrockApplicationInferenceProfileTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.NewDataAwsccBedrockApplicationInferenceProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockApplicationInferenceProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockApplicationInferenceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockApplicationInferenceProfileTagsOutputReference <a name="DataAwsccBedrockApplicationInferenceProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockapplicationinferenceprofile"

dataawsccbedrockapplicationinferenceprofile.NewDataAwsccBedrockApplicationInferenceProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockApplicationInferenceProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags">DataAwsccBedrockApplicationInferenceProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockApplicationInferenceProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags">DataAwsccBedrockApplicationInferenceProfileTags</a>

---



