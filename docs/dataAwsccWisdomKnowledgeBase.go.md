# `dataAwsccWisdomKnowledgeBase` Submodule <a name="`dataAwsccWisdomKnowledgeBase` Submodule" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWisdomKnowledgeBase <a name="DataAwsccWisdomKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wisdom_knowledge_base awscc_wisdom_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBase(scope Construct, id *string, config DataAwsccWisdomKnowledgeBaseConfig) DataAwsccWisdomKnowledgeBase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig">DataAwsccWisdomKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig">DataAwsccWisdomKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWisdomKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccWisdomKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccWisdomKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccWisdomKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wisdom_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWisdomKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseArn">KnowledgeBaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseType">KnowledgeBaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.renderingConfiguration">RenderingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList">DataAwsccWisdomKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.vectorIngestionConfiguration">VectorIngestionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KnowledgeBaseArn`<sup>Required</sup> <a name="KnowledgeBaseArn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseArn"></a>

```go
func KnowledgeBaseArn() *string
```

- *Type:* *string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseId"></a>

```go
func KnowledgeBaseId() *string
```

- *Type:* *string

---

##### `KnowledgeBaseType`<sup>Required</sup> <a name="KnowledgeBaseType" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.knowledgeBaseType"></a>

```go
func KnowledgeBaseType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RenderingConfiguration`<sup>Required</sup> <a name="RenderingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.renderingConfiguration"></a>

```go
func RenderingConfiguration() DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference</a>

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.serverSideEncryptionConfiguration"></a>

```go
func ServerSideEncryptionConfiguration() DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference</a>

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.sourceConfiguration"></a>

```go
func SourceConfiguration() DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.tags"></a>

```go
func Tags() DataAwsccWisdomKnowledgeBaseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList">DataAwsccWisdomKnowledgeBaseTagsList</a>

---

##### `VectorIngestionConfiguration`<sup>Required</sup> <a name="VectorIngestionConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.vectorIngestionConfiguration"></a>

```go
func VectorIngestionConfiguration() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWisdomKnowledgeBaseConfig <a name="DataAwsccWisdomKnowledgeBaseConfig" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wisdom_knowledge_base#id DataAwsccWisdomKnowledgeBase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWisdomKnowledgeBaseRenderingConfiguration <a name="DataAwsccWisdomKnowledgeBaseRenderingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration <a name="DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseSourceConfiguration <a name="DataAwsccWisdomKnowledgeBaseSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseSourceConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations {

}
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits {

}
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls {

}
```


### DataAwsccWisdomKnowledgeBaseTags <a name="DataAwsccWisdomKnowledgeBaseTags" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseTags {

}
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations {

}
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration {

}
```


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

&dataawsccwisdomknowledgebase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUri">TemplateUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration">DataAwsccWisdomKnowledgeBaseRenderingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateUri`<sup>Required</sup> <a name="TemplateUri" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUri"></a>

```go
func TemplateUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseRenderingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseRenderingConfiguration">DataAwsccWisdomKnowledgeBaseRenderingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration">DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration">DataAwsccWisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArn">AppIntegrationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFields">ObjectFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations">DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppIntegrationArn`<sup>Required</sup> <a name="AppIntegrationArn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArn"></a>

```go
func AppIntegrationArn() *string
```

- *Type:* *string

---

##### `ObjectFields`<sup>Required</sup> <a name="ObjectFields" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFields"></a>

```go
func ObjectFields() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations">DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfiguration">WebCrawlerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WebCrawlerConfiguration`<sup>Required</sup> <a name="WebCrawlerConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfiguration"></a>

```go
func WebCrawlerConfiguration() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimit"></a>

```go
func RateLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimits">CrawlerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFilters">ExclusionFilters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFilters">InclusionFilters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfiguration">UrlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrawlerLimits`<sup>Required</sup> <a name="CrawlerLimits" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimits"></a>

```go
func CrawlerLimits() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference</a>

---

##### `ExclusionFilters`<sup>Required</sup> <a name="ExclusionFilters" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFilters"></a>

```go
func ExclusionFilters() *[]*string
```

- *Type:* *[]*string

---

##### `InclusionFilters`<sup>Required</sup> <a name="InclusionFilters" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFilters"></a>

```go
func InclusionFilters() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `UrlConfiguration`<sup>Required</sup> <a name="UrlConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfiguration"></a>

```go
func UrlConfiguration() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrls">SeedUrls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SeedUrls`<sup>Required</sup> <a name="SeedUrls" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrls"></a>

```go
func SeedUrls() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get"></a>

```go
func Get(index *f64) DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>

---


### DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrations">AppIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfiguration">ManagedSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppIntegrations`<sup>Required</sup> <a name="AppIntegrations" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrations"></a>

```go
func AppIntegrations() DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference</a>

---

##### `ManagedSourceConfiguration`<sup>Required</sup> <a name="ManagedSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfiguration"></a>

```go
func ManagedSourceConfiguration() DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseSourceConfiguration">DataAwsccWisdomKnowledgeBaseSourceConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseTagsList <a name="DataAwsccWisdomKnowledgeBaseTagsList" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWisdomKnowledgeBaseTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.get"></a>

```go
func Get(index *f64) DataAwsccWisdomKnowledgeBaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWisdomKnowledgeBaseTagsOutputReference <a name="DataAwsccWisdomKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWisdomKnowledgeBaseTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTags">DataAwsccWisdomKnowledgeBaseTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseTags">DataAwsccWisdomKnowledgeBaseTags</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage">OverlapPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `OverlapPercentage`<sup>Required</sup> <a name="OverlapPercentage" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage"></a>

```go
func OverlapPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurations">LevelConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokens">OverlapTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LevelConfigurations`<sup>Required</sup> <a name="LevelConfigurations" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurations"></a>

```go
func LevelConfigurations() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList</a>

---

##### `OverlapTokens`<sup>Required</sup> <a name="OverlapTokens" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokens"></a>

```go
func OverlapTokens() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy">ChunkingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration">FixedSizeChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfiguration">HierarchicalChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfiguration">SemanticChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChunkingStrategy`<sup>Required</sup> <a name="ChunkingStrategy" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy"></a>

```go
func ChunkingStrategy() *string
```

- *Type:* *string

---

##### `FixedSizeChunkingConfiguration`<sup>Required</sup> <a name="FixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration"></a>

```go
func FixedSizeChunkingConfiguration() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference</a>

---

##### `HierarchicalChunkingConfiguration`<sup>Required</sup> <a name="HierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfiguration"></a>

```go
func HierarchicalChunkingConfiguration() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference</a>

---

##### `SemanticChunkingConfiguration`<sup>Required</sup> <a name="SemanticChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfiguration"></a>

```go
func SemanticChunkingConfiguration() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThreshold">BreakpointPercentileThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSize">BufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BreakpointPercentileThreshold`<sup>Required</sup> <a name="BreakpointPercentileThreshold" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThreshold"></a>

```go
func BreakpointPercentileThreshold() *f64
```

- *Type:* *f64

---

##### `BufferSize`<sup>Required</sup> <a name="BufferSize" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSize"></a>

```go
func BufferSize() *f64
```

- *Type:* *f64

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfiguration">ChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfiguration">ParsingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChunkingConfiguration`<sup>Required</sup> <a name="ChunkingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfiguration"></a>

```go
func ChunkingConfiguration() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference</a>

---

##### `ParsingConfiguration`<sup>Required</sup> <a name="ParsingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfiguration"></a>

```go
func ParsingConfiguration() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPrompt">ParsingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `ParsingPrompt`<sup>Required</sup> <a name="ParsingPrompt" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPrompt"></a>

```go
func ParsingPrompt() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptText">ParsingPromptText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParsingPromptText`<sup>Required</sup> <a name="ParsingPromptText" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptText"></a>

```go
func ParsingPromptText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

---


### DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference <a name="DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccwisdomknowledgebase"

dataawsccwisdomknowledgebase.NewDataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfiguration">BedrockFoundationModelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategy">ParsingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BedrockFoundationModelConfiguration`<sup>Required</sup> <a name="BedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfiguration"></a>

```go
func BedrockFoundationModelConfiguration() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference</a>

---

##### `ParsingStrategy`<sup>Required</sup> <a name="ParsingStrategy" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategy"></a>

```go
func ParsingStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomKnowledgeBase.DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">DataAwsccWisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

---



