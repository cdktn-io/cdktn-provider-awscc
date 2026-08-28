# `dataAwsccWisdomMessageTemplate` Submodule <a name="`dataAwsccWisdomMessageTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWisdomMessageTemplate <a name="DataAwsccWisdomMessageTemplate" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wisdom_message_template awscc_wisdom_message_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplate(scope Construct, id *string, config DataAwsccWisdomMessageTemplateConfig) DataAwsccWisdomMessageTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig">DataAwsccWisdomMessageTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig">DataAwsccWisdomMessageTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWisdomMessageTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccWisdomMessageTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccWisdomMessageTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccWisdomMessageTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wisdom_message_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWisdomMessageTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.channelSubtype">ChannelSubtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference">DataAwsccWisdomMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.defaultAttributes">DefaultAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.groupingConfiguration">GroupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference">DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.knowledgeBaseArn">KnowledgeBaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.messageTemplateArn">MessageTemplateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.messageTemplateAttachments">MessageTemplateAttachments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList">DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.messageTemplateContentSha256">MessageTemplateContentSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.messageTemplateId">MessageTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList">DataAwsccWisdomMessageTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ChannelSubtype`<sup>Required</sup> <a name="ChannelSubtype" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.channelSubtype"></a>

```go
func ChannelSubtype() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.content"></a>

```go
func Content() DataAwsccWisdomMessageTemplateContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference">DataAwsccWisdomMessageTemplateContentOutputReference</a>

---

##### `DefaultAttributes`<sup>Required</sup> <a name="DefaultAttributes" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.defaultAttributes"></a>

```go
func DefaultAttributes() DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GroupingConfiguration`<sup>Required</sup> <a name="GroupingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.groupingConfiguration"></a>

```go
func GroupingConfiguration() DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference">DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference</a>

---

##### `KnowledgeBaseArn`<sup>Required</sup> <a name="KnowledgeBaseArn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.knowledgeBaseArn"></a>

```go
func KnowledgeBaseArn() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `MessageTemplateArn`<sup>Required</sup> <a name="MessageTemplateArn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.messageTemplateArn"></a>

```go
func MessageTemplateArn() *string
```

- *Type:* *string

---

##### `MessageTemplateAttachments`<sup>Required</sup> <a name="MessageTemplateAttachments" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.messageTemplateAttachments"></a>

```go
func MessageTemplateAttachments() DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList">DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList</a>

---

##### `MessageTemplateContentSha256`<sup>Required</sup> <a name="MessageTemplateContentSha256" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.messageTemplateContentSha256"></a>

```go
func MessageTemplateContentSha256() *string
```

- *Type:* *string

---

##### `MessageTemplateId`<sup>Required</sup> <a name="MessageTemplateId" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.messageTemplateId"></a>

```go
func MessageTemplateId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.tags"></a>

```go
func Tags() DataAwsccWisdomMessageTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList">DataAwsccWisdomMessageTemplateTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWisdomMessageTemplateConfig <a name="DataAwsccWisdomMessageTemplateConfig" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/wisdom_message_template#id DataAwsccWisdomMessageTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWisdomMessageTemplateContent <a name="DataAwsccWisdomMessageTemplateContent" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateContent {

}
```


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent {

}
```


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody {

}
```


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml {

}
```


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText {

}
```


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders {

}
```


### DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent <a name="DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent {

}
```


### DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody <a name="DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody {

}
```


### DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText <a name="DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText {

}
```


### DataAwsccWisdomMessageTemplateDefaultAttributes <a name="DataAwsccWisdomMessageTemplateDefaultAttributes" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateDefaultAttributes {

}
```


### DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes <a name="DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes {

}
```


### DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes <a name="DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes {

}
```


### DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes <a name="DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes {

}
```


### DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint <a name="DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint {

}
```


### DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint <a name="DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint {

}
```


### DataAwsccWisdomMessageTemplateGroupingConfiguration <a name="DataAwsccWisdomMessageTemplateGroupingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateGroupingConfiguration {

}
```


### DataAwsccWisdomMessageTemplateMessageTemplateAttachments <a name="DataAwsccWisdomMessageTemplateMessageTemplateAttachments" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachments {

}
```


### DataAwsccWisdomMessageTemplateTags <a name="DataAwsccWisdomMessageTemplateTags" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

&dataawsccwisdommessagetemplate.DataAwsccWisdomMessageTemplateTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html">Html</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html"></a>

```go
func Html() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a>

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText"></a>

```go
func PlainText() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get"></a>

```go
func Get(index *f64) DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>

---


### DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference <a name="DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body"></a>

```go
func Body() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers"></a>

```go
func Headers() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a>

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent</a>

---


### DataAwsccWisdomMessageTemplateContentOutputReference <a name="DataAwsccWisdomMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent">EmailMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent">SmsMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContent">DataAwsccWisdomMessageTemplateContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailMessageTemplateContent`<sup>Required</sup> <a name="EmailMessageTemplateContent" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent"></a>

```go
func EmailMessageTemplateContent() DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a>

---

##### `SmsMessageTemplateContent`<sup>Required</sup> <a name="SmsMessageTemplateContent" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent"></a>

```go
func SmsMessageTemplateContent() DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContent">DataAwsccWisdomMessageTemplateContent</a>

---


### DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference <a name="DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText"></a>

```go
func PlainText() DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---


### DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference <a name="DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---


### DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference <a name="DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body"></a>

```go
func Body() DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent">DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent</a>

---


### DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference <a name="DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes">DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes">DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---


### DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference <a name="DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber">AccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation">AdditionalInformation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3">Address3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4">Address4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1">BillingAddress1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2">BillingAddress2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3">BillingAddress3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4">BillingAddress4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity">BillingCity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry">BillingCountry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty">BillingCounty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode">BillingPostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince">BillingProvince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState">BillingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate">BirthDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress">BusinessEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName">BusinessName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber">BusinessPhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom">Custom</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender">Gender</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber">HomePhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1">MailingAddress1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2">MailingAddress2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3">MailingAddress3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4">MailingAddress4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity">MailingCity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry">MailingCountry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty">MailingCounty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode">MailingPostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince">MailingProvince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState">MailingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber">MobilePhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType">PartyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn">ProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1">ShippingAddress1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2">ShippingAddress2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3">ShippingAddress3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4">ShippingAddress4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity">ShippingCity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry">ShippingCountry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty">ShippingCounty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode">ShippingPostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince">ShippingProvince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState">ShippingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountNumber`<sup>Required</sup> <a name="AccountNumber" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber"></a>

```go
func AccountNumber() *string
```

- *Type:* *string

---

##### `AdditionalInformation`<sup>Required</sup> <a name="AdditionalInformation" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation"></a>

```go
func AdditionalInformation() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3"></a>

```go
func Address3() *string
```

- *Type:* *string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4"></a>

```go
func Address4() *string
```

- *Type:* *string

---

##### `BillingAddress1`<sup>Required</sup> <a name="BillingAddress1" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1"></a>

```go
func BillingAddress1() *string
```

- *Type:* *string

---

##### `BillingAddress2`<sup>Required</sup> <a name="BillingAddress2" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2"></a>

```go
func BillingAddress2() *string
```

- *Type:* *string

---

##### `BillingAddress3`<sup>Required</sup> <a name="BillingAddress3" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3"></a>

```go
func BillingAddress3() *string
```

- *Type:* *string

---

##### `BillingAddress4`<sup>Required</sup> <a name="BillingAddress4" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4"></a>

```go
func BillingAddress4() *string
```

- *Type:* *string

---

##### `BillingCity`<sup>Required</sup> <a name="BillingCity" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity"></a>

```go
func BillingCity() *string
```

- *Type:* *string

---

##### `BillingCountry`<sup>Required</sup> <a name="BillingCountry" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry"></a>

```go
func BillingCountry() *string
```

- *Type:* *string

---

##### `BillingCounty`<sup>Required</sup> <a name="BillingCounty" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty"></a>

```go
func BillingCounty() *string
```

- *Type:* *string

---

##### `BillingPostalCode`<sup>Required</sup> <a name="BillingPostalCode" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode"></a>

```go
func BillingPostalCode() *string
```

- *Type:* *string

---

##### `BillingProvince`<sup>Required</sup> <a name="BillingProvince" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince"></a>

```go
func BillingProvince() *string
```

- *Type:* *string

---

##### `BillingState`<sup>Required</sup> <a name="BillingState" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState"></a>

```go
func BillingState() *string
```

- *Type:* *string

---

##### `BirthDate`<sup>Required</sup> <a name="BirthDate" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate"></a>

```go
func BirthDate() *string
```

- *Type:* *string

---

##### `BusinessEmailAddress`<sup>Required</sup> <a name="BusinessEmailAddress" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress"></a>

```go
func BusinessEmailAddress() *string
```

- *Type:* *string

---

##### `BusinessName`<sup>Required</sup> <a name="BusinessName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName"></a>

```go
func BusinessName() *string
```

- *Type:* *string

---

##### `BusinessPhoneNumber`<sup>Required</sup> <a name="BusinessPhoneNumber" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber"></a>

```go
func BusinessPhoneNumber() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom"></a>

```go
func Custom() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `Gender`<sup>Required</sup> <a name="Gender" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender"></a>

```go
func Gender() *string
```

- *Type:* *string

---

##### `HomePhoneNumber`<sup>Required</sup> <a name="HomePhoneNumber" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber"></a>

```go
func HomePhoneNumber() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `MailingAddress1`<sup>Required</sup> <a name="MailingAddress1" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1"></a>

```go
func MailingAddress1() *string
```

- *Type:* *string

---

##### `MailingAddress2`<sup>Required</sup> <a name="MailingAddress2" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2"></a>

```go
func MailingAddress2() *string
```

- *Type:* *string

---

##### `MailingAddress3`<sup>Required</sup> <a name="MailingAddress3" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3"></a>

```go
func MailingAddress3() *string
```

- *Type:* *string

---

##### `MailingAddress4`<sup>Required</sup> <a name="MailingAddress4" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4"></a>

```go
func MailingAddress4() *string
```

- *Type:* *string

---

##### `MailingCity`<sup>Required</sup> <a name="MailingCity" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity"></a>

```go
func MailingCity() *string
```

- *Type:* *string

---

##### `MailingCountry`<sup>Required</sup> <a name="MailingCountry" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry"></a>

```go
func MailingCountry() *string
```

- *Type:* *string

---

##### `MailingCounty`<sup>Required</sup> <a name="MailingCounty" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty"></a>

```go
func MailingCounty() *string
```

- *Type:* *string

---

##### `MailingPostalCode`<sup>Required</sup> <a name="MailingPostalCode" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode"></a>

```go
func MailingPostalCode() *string
```

- *Type:* *string

---

##### `MailingProvince`<sup>Required</sup> <a name="MailingProvince" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince"></a>

```go
func MailingProvince() *string
```

- *Type:* *string

---

##### `MailingState`<sup>Required</sup> <a name="MailingState" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState"></a>

```go
func MailingState() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MobilePhoneNumber`<sup>Required</sup> <a name="MobilePhoneNumber" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber"></a>

```go
func MobilePhoneNumber() *string
```

- *Type:* *string

---

##### `PartyType`<sup>Required</sup> <a name="PartyType" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType"></a>

```go
func PartyType() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `ProfileArn`<sup>Required</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn"></a>

```go
func ProfileArn() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `ShippingAddress1`<sup>Required</sup> <a name="ShippingAddress1" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1"></a>

```go
func ShippingAddress1() *string
```

- *Type:* *string

---

##### `ShippingAddress2`<sup>Required</sup> <a name="ShippingAddress2" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2"></a>

```go
func ShippingAddress2() *string
```

- *Type:* *string

---

##### `ShippingAddress3`<sup>Required</sup> <a name="ShippingAddress3" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3"></a>

```go
func ShippingAddress3() *string
```

- *Type:* *string

---

##### `ShippingAddress4`<sup>Required</sup> <a name="ShippingAddress4" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4"></a>

```go
func ShippingAddress4() *string
```

- *Type:* *string

---

##### `ShippingCity`<sup>Required</sup> <a name="ShippingCity" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity"></a>

```go
func ShippingCity() *string
```

- *Type:* *string

---

##### `ShippingCountry`<sup>Required</sup> <a name="ShippingCountry" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry"></a>

```go
func ShippingCountry() *string
```

- *Type:* *string

---

##### `ShippingCounty`<sup>Required</sup> <a name="ShippingCounty" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty"></a>

```go
func ShippingCounty() *string
```

- *Type:* *string

---

##### `ShippingPostalCode`<sup>Required</sup> <a name="ShippingPostalCode" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode"></a>

```go
func ShippingPostalCode() *string
```

- *Type:* *string

---

##### `ShippingProvince`<sup>Required</sup> <a name="ShippingProvince" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince"></a>

```go
func ShippingProvince() *string
```

- *Type:* *string

---

##### `ShippingState`<sup>Required</sup> <a name="ShippingState" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState"></a>

```go
func ShippingState() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---


### DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference <a name="DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateDefaultAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes">AgentAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes">CustomAttributes</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes">CustomerProfileAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes">SystemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributes">DataAwsccWisdomMessageTemplateDefaultAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentAttributes`<sup>Required</sup> <a name="AgentAttributes" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes"></a>

```go
func AgentAttributes() DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a>

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes"></a>

```go
func CustomAttributes() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `CustomerProfileAttributes`<sup>Required</sup> <a name="CustomerProfileAttributes" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes"></a>

```go
func CustomerProfileAttributes() DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a>

---

##### `SystemAttributes`<sup>Required</sup> <a name="SystemAttributes" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes"></a>

```go
func SystemAttributes() DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateDefaultAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributes">DataAwsccWisdomMessageTemplateDefaultAttributes</a>

---


### DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference <a name="DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---


### DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference <a name="DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint">CustomerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint">SystemEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint"></a>

```go
func CustomerEndpoint() DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SystemEndpoint`<sup>Required</sup> <a name="SystemEndpoint" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint"></a>

```go
func SystemEndpoint() DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---


### DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference <a name="DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---


### DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference <a name="DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria">Criteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfiguration">DataAwsccWisdomMessageTemplateGroupingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria"></a>

```go
func Criteria() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateGroupingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateGroupingConfiguration">DataAwsccWisdomMessageTemplateGroupingConfiguration</a>

---


### DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList <a name="DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.get"></a>

```go
func Get(index *f64) DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference <a name="DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName">AttachmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl">S3PresignedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachments">DataAwsccWisdomMessageTemplateMessageTemplateAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `AttachmentName`<sup>Required</sup> <a name="AttachmentName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName"></a>

```go
func AttachmentName() *string
```

- *Type:* *string

---

##### `S3PresignedUrl`<sup>Required</sup> <a name="S3PresignedUrl" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl"></a>

```go
func S3PresignedUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateMessageTemplateAttachments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateMessageTemplateAttachments">DataAwsccWisdomMessageTemplateMessageTemplateAttachments</a>

---


### DataAwsccWisdomMessageTemplateTagsList <a name="DataAwsccWisdomMessageTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWisdomMessageTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.get"></a>

```go
func Get(index *f64) DataAwsccWisdomMessageTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWisdomMessageTemplateTagsOutputReference <a name="DataAwsccWisdomMessageTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdommessagetemplate"

dataawsccwisdommessagetemplate.NewDataAwsccWisdomMessageTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWisdomMessageTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTags">DataAwsccWisdomMessageTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomMessageTemplateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomMessageTemplate.DataAwsccWisdomMessageTemplateTags">DataAwsccWisdomMessageTemplateTags</a>

---



