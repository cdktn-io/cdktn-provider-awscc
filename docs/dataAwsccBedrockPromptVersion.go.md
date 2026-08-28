# `dataAwsccBedrockPromptVersion` Submodule <a name="`dataAwsccBedrockPromptVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockPromptVersion <a name="DataAwsccBedrockPromptVersion" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_prompt_version awscc_bedrock_prompt_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersion(scope Construct, id *string, config DataAwsccBedrockPromptVersionConfig) DataAwsccBedrockPromptVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig">DataAwsccBedrockPromptVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig">DataAwsccBedrockPromptVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockPromptVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockPromptVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockPromptVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockPromptVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_prompt_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockPromptVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.defaultVariant">DefaultVariant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.promptArn">PromptArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.promptId">PromptId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.variants">Variants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList">DataAwsccBedrockPromptVersionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.customerEncryptionKeyArn"></a>

```go
func CustomerEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `DefaultVariant`<sup>Required</sup> <a name="DefaultVariant" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.defaultVariant"></a>

```go
func DefaultVariant() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PromptArn`<sup>Required</sup> <a name="PromptArn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.promptArn"></a>

```go
func PromptArn() *string
```

- *Type:* *string

---

##### `PromptId`<sup>Required</sup> <a name="PromptId" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.promptId"></a>

```go
func PromptId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Variants`<sup>Required</sup> <a name="Variants" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.variants"></a>

```go
func Variants() DataAwsccBedrockPromptVersionVariantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList">DataAwsccBedrockPromptVersionVariantsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockPromptVersionConfig <a name="DataAwsccBedrockPromptVersionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_prompt_version#id DataAwsccBedrockPromptVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockPromptVersionVariants <a name="DataAwsccBedrockPromptVersionVariants" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariants {

}
```


### DataAwsccBedrockPromptVersionVariantsGenAiResource <a name="DataAwsccBedrockPromptVersionVariantsGenAiResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsGenAiResource {

}
```


### DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent <a name="DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent {

}
```


### DataAwsccBedrockPromptVersionVariantsInferenceConfiguration <a name="DataAwsccBedrockPromptVersionVariantsInferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration {

}
```


### DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText <a name="DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText {

}
```


### DataAwsccBedrockPromptVersionVariantsMetadata <a name="DataAwsccBedrockPromptVersionVariantsMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsMetadata {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfiguration <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint {

}
```


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

&dataawsccbedrockpromptversion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference <a name="DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">AgentIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent">DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIdentifier`<sup>Required</sup> <a name="AgentIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```go
func AgentIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent">DataAwsccBedrockPromptVersionVariantsGenAiResourceAgent</a>

---


### DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference <a name="DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.agent">Agent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResource">DataAwsccBedrockPromptVersionVariantsGenAiResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.agent"></a>

```go
func Agent() DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVersionVariantsGenAiResourceAgentOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsGenAiResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResource">DataAwsccBedrockPromptVersionVariantsGenAiResource</a>

---


### DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference <a name="DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration">DataAwsccBedrockPromptVersionVariantsInferenceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.text"></a>

```go
func Text() DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfiguration">DataAwsccBedrockPromptVersionVariantsInferenceConfiguration</a>

---


### DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.stopSequences">StopSequences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `StopSequences`<sup>Required</sup> <a name="StopSequences" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```go
func StopSequences() *[]*string
```

- *Type:* *[]*string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationText</a>

---


### DataAwsccBedrockPromptVersionVariantsList <a name="DataAwsccBedrockPromptVersionVariantsList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVersionVariantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVersionVariantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVersionVariantsMetadataList <a name="DataAwsccBedrockPromptVersionVariantsMetadataList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVersionVariantsMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVersionVariantsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVersionVariantsMetadataOutputReference <a name="DataAwsccBedrockPromptVersionVariantsMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVersionVariantsMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadata">DataAwsccBedrockPromptVersionVariantsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadata">DataAwsccBedrockPromptVersionVariantsMetadata</a>

---


### DataAwsccBedrockPromptVersionVariantsOutputReference <a name="DataAwsccBedrockPromptVersionVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVersionVariantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.genAiResource">GenAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList">DataAwsccBedrockPromptVersionVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.templateType">TemplateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariants">DataAwsccBedrockPromptVersionVariants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalModelRequestFields`<sup>Required</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.additionalModelRequestFields"></a>

```go
func AdditionalModelRequestFields() *string
```

- *Type:* *string

---

##### `GenAiResource`<sup>Required</sup> <a name="GenAiResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.genAiResource"></a>

```go
func GenAiResource() DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVersionVariantsGenAiResourceOutputReference</a>

---

##### `InferenceConfiguration`<sup>Required</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.inferenceConfiguration"></a>

```go
func InferenceConfiguration() DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsInferenceConfigurationOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.metadata"></a>

```go
func Metadata() DataAwsccBedrockPromptVersionVariantsMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsMetadataList">DataAwsccBedrockPromptVersionVariantsMetadataList</a>

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.templateConfiguration"></a>

```go
func TemplateConfiguration() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference</a>

---

##### `TemplateType`<sup>Required</sup> <a name="TemplateType" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.templateType"></a>

```go
func TemplateType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariants
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariants">DataAwsccBedrockPromptVersionVariants</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariables</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```go
func CachePoint() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```go
func Content() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessages</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">ToolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```go
func InputVariables() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```go
func Messages() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatMessagesList</a>

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```go
func SystemAttribute() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList</a>

---

##### `ToolConfiguration`<sup>Required</sup> <a name="ToolConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```go
func ToolConfiguration() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChat</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```go
func CachePoint() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatSystem</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">ToolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">Tools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolChoice`<sup>Required</sup> <a name="ToolChoice" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```go
func ToolChoice() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```go
func Tools() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">Any</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">Auto</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">Tool</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Any`<sup>Required</sup> <a name="Any" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```go
func Any() *string
```

- *Type:* *string

---

##### `Auto`<sup>Required</sup> <a name="Auto" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```go
func Auto() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```go
func Tool() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">ToolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```go
func CachePoint() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `ToolSpec`<sup>Required</sup> <a name="ToolSpec" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```go
func ToolSpec() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">InputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```go
func InputSchema() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.chat">Chat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration">DataAwsccBedrockPromptVersionVariantsTemplateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Chat`<sup>Required</sup> <a name="Chat" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.chat"></a>

```go
func Chat() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationChatOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.text"></a>

```go
func Text() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfiguration">DataAwsccBedrockPromptVersionVariantsTemplateConfiguration</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePoint</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariables</a>

---


### DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockpromptversion"

dataawsccbedrockpromptversion.NewDataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```go
func CachePoint() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```go
func InputVariables() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPromptVersion.DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText">DataAwsccBedrockPromptVersionVariantsTemplateConfigurationText</a>

---



