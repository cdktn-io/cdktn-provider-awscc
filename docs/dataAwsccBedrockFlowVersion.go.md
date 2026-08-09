# `dataAwsccBedrockFlowVersion` Submodule <a name="`dataAwsccBedrockFlowVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockFlowVersion <a name="DataAwsccBedrockFlowVersion" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_flow_version awscc_bedrock_flow_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersion(scope Construct, id *string, config DataAwsccBedrockFlowVersionConfig) DataAwsccBedrockFlowVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig">DataAwsccBedrockFlowVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig">DataAwsccBedrockFlowVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockFlowVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.DataAwsccBedrockFlowVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.DataAwsccBedrockFlowVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.DataAwsccBedrockFlowVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.DataAwsccBedrockFlowVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockFlowVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockFlowVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockFlowVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_flow_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockFlowVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference">DataAwsccBedrockFlowVersionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.flowId">FlowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.customerEncryptionKeyArn"></a>

```go
func CustomerEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.definition"></a>

```go
func Definition() DataAwsccBedrockFlowVersionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference">DataAwsccBedrockFlowVersionDefinitionOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `FlowId`<sup>Required</sup> <a name="FlowId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.flowId"></a>

```go
func FlowId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockFlowVersionConfig <a name="DataAwsccBedrockFlowVersionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_flow_version#id DataAwsccBedrockFlowVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockFlowVersionDefinition <a name="DataAwsccBedrockFlowVersionDefinition" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinition {

}
```


### DataAwsccBedrockFlowVersionDefinitionConnections <a name="DataAwsccBedrockFlowVersionDefinitionConnections" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionConnections {

}
```


### DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration <a name="DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration {

}
```


### DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional <a name="DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional {

}
```


### DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData <a name="DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodes <a name="DataAwsccBedrockFlowVersionDefinitionNodes" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodes {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfiguration <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfiguration {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesInputs <a name="DataAwsccBedrockFlowVersionDefinitionNodesInputs" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesInputs {

}
```


### DataAwsccBedrockFlowVersionDefinitionNodesOutputs <a name="DataAwsccBedrockFlowVersionDefinitionNodesOutputs" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

&dataawsccbedrockflowversion.DataAwsccBedrockFlowVersionDefinitionNodesOutputs {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional</a>

---


### DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.sourceOutput">SourceOutput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceOutput`<sup>Required</sup> <a name="SourceOutput" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.sourceOutput"></a>

```go
func SourceOutput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Required</sup> <a name="TargetInput" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData</a>

---


### DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.conditional">Conditional</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.data">Data</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration">DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditional`<sup>Required</sup> <a name="Conditional" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.conditional"></a>

```go
func Conditional() DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference</a>

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.data"></a>

```go
func Data() DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration">DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration</a>

---


### DataAwsccBedrockFlowVersionDefinitionConnectionsList <a name="DataAwsccBedrockFlowVersionDefinitionConnectionsList" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockFlowVersionDefinitionConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnections">DataAwsccBedrockFlowVersionDefinitionConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.configuration"></a>

```go
func Configuration() DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionConnections
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnections">DataAwsccBedrockFlowVersionDefinitionConnections</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.agentAliasArn">AgentAliasArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentAliasArn`<sup>Required</sup> <a name="AgentAliasArn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.agentAliasArn"></a>

```go
func AgentAliasArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.conditions"></a>

```go
func Conditions() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailVersion">GuardrailVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuardrailIdentifier`<sup>Required</sup> <a name="GuardrailIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```go
func GuardrailIdentifier() *string
```

- *Type:* *string

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```go
func GuardrailVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuardrailConfiguration`<sup>Required</sup> <a name="GuardrailConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.guardrailConfiguration"></a>

```go
func GuardrailConfiguration() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference</a>

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.knowledgeBaseId"></a>

```go
func KnowledgeBaseId() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.botAliasArn">BotAliasArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.localeId">LocaleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BotAliasArn`<sup>Required</sup> <a name="BotAliasArn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.botAliasArn"></a>

```go
func BotAliasArn() *string
```

- *Type:* *string

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.localeId"></a>

```go
func LocaleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.agent">Agent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.collector">Collector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.inlineCode">InlineCode</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.iterator">Iterator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.knowledgeBase">KnowledgeBase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lambdaFunction">LambdaFunction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lex">Lex</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.output">Output</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.prompt">Prompt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.retrieval">Retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.agent"></a>

```go
func Agent() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference</a>

---

##### `Collector`<sup>Required</sup> <a name="Collector" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.collector"></a>

```go
func Collector() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.condition"></a>

```go
func Condition() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference</a>

---

##### `InlineCode`<sup>Required</sup> <a name="InlineCode" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.inlineCode"></a>

```go
func InlineCode() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference</a>

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `Iterator`<sup>Required</sup> <a name="Iterator" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.iterator"></a>

```go
func Iterator() *string
```

- *Type:* *string

---

##### `KnowledgeBase`<sup>Required</sup> <a name="KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.knowledgeBase"></a>

```go
func KnowledgeBase() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference</a>

---

##### `LambdaFunction`<sup>Required</sup> <a name="LambdaFunction" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lambdaFunction"></a>

```go
func LambdaFunction() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference</a>

---

##### `Lex`<sup>Required</sup> <a name="Lex" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lex"></a>

```go
func Lex() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.output"></a>

```go
func Output() *string
```

- *Type:* *string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.prompt"></a>

```go
func Prompt() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference</a>

---

##### `Retrieval`<sup>Required</sup> <a name="Retrieval" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.retrieval"></a>

```go
func Retrieval() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.storage"></a>

```go
func Storage() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfiguration</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailVersion">GuardrailVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuardrailIdentifier`<sup>Required</sup> <a name="GuardrailIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```go
func GuardrailIdentifier() *string
```

- *Type:* *string

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```go
func GuardrailVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuardrailConfiguration`<sup>Required</sup> <a name="GuardrailConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.guardrailConfiguration"></a>

```go
func GuardrailConfiguration() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference</a>

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.sourceConfiguration"></a>

```go
func SourceConfiguration() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.text"></a>

```go
func Text() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.maxTokens">MaxTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.stopSequences">StopSequences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```go
func MaxTokens() *f64
```

- *Type:* *f64

---

##### `StopSequences`<sup>Required</sup> <a name="StopSequences" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```go
func StopSequences() *[]*string
```

- *Type:* *[]*string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateType">TemplateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InferenceConfiguration`<sup>Required</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.inferenceConfiguration"></a>

```go
func InferenceConfiguration() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference</a>

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateConfiguration"></a>

```go
func TemplateConfiguration() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference</a>

---

##### `TemplateType`<sup>Required</sup> <a name="TemplateType" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateType"></a>

```go
func TemplateType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.text"></a>

```go
func Text() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```go
func InputVariables() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.inline">Inline</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.inline"></a>

```go
func Inline() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.resource"></a>

```go
func Resource() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.promptArn">PromptArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PromptArn`<sup>Required</sup> <a name="PromptArn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.promptArn"></a>

```go
func PromptArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.serviceConfiguration">ServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceConfiguration`<sup>Required</sup> <a name="ServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.serviceConfiguration"></a>

```go
func ServiceConfiguration() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.s3"></a>

```go
func S3() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.serviceConfiguration">ServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceConfiguration`<sup>Required</sup> <a name="ServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.serviceConfiguration"></a>

```go
func ServiceConfiguration() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.s3"></a>

```go
func S3() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesInputsList <a name="DataAwsccBedrockFlowVersionDefinitionNodesInputsList" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesInputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesInputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputs">DataAwsccBedrockFlowVersionDefinitionNodesInputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesInputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputs">DataAwsccBedrockFlowVersionDefinitionNodesInputs</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesList <a name="DataAwsccBedrockFlowVersionDefinitionNodesList" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockFlowVersionDefinitionNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockFlowVersionDefinitionNodesOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.inputs">Inputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList">DataAwsccBedrockFlowVersionDefinitionNodesInputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList">DataAwsccBedrockFlowVersionDefinitionNodesOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodes">DataAwsccBedrockFlowVersionDefinitionNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.configuration"></a>

```go
func Configuration() DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference">DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference</a>

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.inputs"></a>

```go
func Inputs() DataAwsccBedrockFlowVersionDefinitionNodesInputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesInputsList">DataAwsccBedrockFlowVersionDefinitionNodesInputsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.outputs"></a>

```go
func Outputs() DataAwsccBedrockFlowVersionDefinitionNodesOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList">DataAwsccBedrockFlowVersionDefinitionNodesOutputsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodes">DataAwsccBedrockFlowVersionDefinitionNodes</a>

---


### DataAwsccBedrockFlowVersionDefinitionNodesOutputsList <a name="DataAwsccBedrockFlowVersionDefinitionNodesOutputsList" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputs">DataAwsccBedrockFlowVersionDefinitionNodesOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinitionNodesOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesOutputs">DataAwsccBedrockFlowVersionDefinitionNodesOutputs</a>

---


### DataAwsccBedrockFlowVersionDefinitionOutputReference <a name="DataAwsccBedrockFlowVersionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockflowversion"

dataawsccbedrockflowversion.NewDataAwsccBedrockFlowVersionDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockFlowVersionDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList">DataAwsccBedrockFlowVersionDefinitionConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.nodes">Nodes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList">DataAwsccBedrockFlowVersionDefinitionNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinition">DataAwsccBedrockFlowVersionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.connections"></a>

```go
func Connections() DataAwsccBedrockFlowVersionDefinitionConnectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionConnectionsList">DataAwsccBedrockFlowVersionDefinitionConnectionsList</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.nodes"></a>

```go
func Nodes() DataAwsccBedrockFlowVersionDefinitionNodesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionNodesList">DataAwsccBedrockFlowVersionDefinitionNodesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockFlowVersionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowVersion.DataAwsccBedrockFlowVersionDefinition">DataAwsccBedrockFlowVersionDefinition</a>

---



