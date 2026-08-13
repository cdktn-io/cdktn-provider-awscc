# `dataAwsccMediaconnectFlowSource` Submodule <a name="`dataAwsccMediaconnectFlowSource` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectFlowSourceA <a name="DataAwsccMediaconnectFlowSourceA" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_flow_source awscc_mediaconnect_flow_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.NewDataAwsccMediaconnectFlowSourceA(scope Construct, id *string, config DataAwsccMediaconnectFlowSourceAConfig) DataAwsccMediaconnectFlowSourceA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig">DataAwsccMediaconnectFlowSourceAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig">DataAwsccMediaconnectFlowSourceAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.DataAwsccMediaconnectFlowSourceA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.DataAwsccMediaconnectFlowSourceA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.DataAwsccMediaconnectFlowSourceA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.DataAwsccMediaconnectFlowSourceA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMediaconnectFlowSourceA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMediaconnectFlowSourceA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_flow_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectFlowSourceA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference">DataAwsccMediaconnectFlowSourceDecryptionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.entitlementArn">EntitlementArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.gatewayBridgeSource">GatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.ingestIp">IngestIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.ingestPort">IngestPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.maxBitrate">MaxBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.maxLatency">MaxLatency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.minLatency">MinLatency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.senderControlPort">SenderControlPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.senderIpAddress">SenderIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.sourceIngestPort">SourceIngestPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.sourceListenerAddress">SourceListenerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.sourceListenerPort">SourceListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList">DataAwsccMediaconnectFlowSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.whitelistCidr">WhitelistCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Decryption`<sup>Required</sup> <a name="Decryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.decryption"></a>

```go
func Decryption() DataAwsccMediaconnectFlowSourceDecryptionAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference">DataAwsccMediaconnectFlowSourceDecryptionAOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntitlementArn`<sup>Required</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.entitlementArn"></a>

```go
func EntitlementArn() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `GatewayBridgeSource`<sup>Required</sup> <a name="GatewayBridgeSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.gatewayBridgeSource"></a>

```go
func GatewayBridgeSource() DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a>

---

##### `IngestIp`<sup>Required</sup> <a name="IngestIp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.ingestIp"></a>

```go
func IngestIp() *string
```

- *Type:* *string

---

##### `IngestPort`<sup>Required</sup> <a name="IngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.ingestPort"></a>

```go
func IngestPort() *f64
```

- *Type:* *f64

---

##### `MaxBitrate`<sup>Required</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.maxBitrate"></a>

```go
func MaxBitrate() *f64
```

- *Type:* *f64

---

##### `MaxLatency`<sup>Required</sup> <a name="MaxLatency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.maxLatency"></a>

```go
func MaxLatency() *f64
```

- *Type:* *f64

---

##### `MinLatency`<sup>Required</sup> <a name="MinLatency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.minLatency"></a>

```go
func MinLatency() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SenderControlPort`<sup>Required</sup> <a name="SenderControlPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.senderControlPort"></a>

```go
func SenderControlPort() *f64
```

- *Type:* *f64

---

##### `SenderIpAddress`<sup>Required</sup> <a name="SenderIpAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.senderIpAddress"></a>

```go
func SenderIpAddress() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `SourceIngestPort`<sup>Required</sup> <a name="SourceIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.sourceIngestPort"></a>

```go
func SourceIngestPort() *string
```

- *Type:* *string

---

##### `SourceListenerAddress`<sup>Required</sup> <a name="SourceListenerAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.sourceListenerAddress"></a>

```go
func SourceListenerAddress() *string
```

- *Type:* *string

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.sourceListenerPort"></a>

```go
func SourceListenerPort() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.tags"></a>

```go
func Tags() DataAwsccMediaconnectFlowSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList">DataAwsccMediaconnectFlowSourceTagsList</a>

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.vpcInterfaceName"></a>

```go
func VpcInterfaceName() *string
```

- *Type:* *string

---

##### `WhitelistCidr`<sup>Required</sup> <a name="WhitelistCidr" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.whitelistCidr"></a>

```go
func WhitelistCidr() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectFlowSourceAConfig <a name="DataAwsccMediaconnectFlowSourceAConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

&dataawsccmediaconnectflowsource.DataAwsccMediaconnectFlowSourceAConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_flow_source#id DataAwsccMediaconnectFlowSourceA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectFlowSourceDecryptionA <a name="DataAwsccMediaconnectFlowSourceDecryptionA" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

&dataawsccmediaconnectflowsource.DataAwsccMediaconnectFlowSourceDecryptionA {

}
```


### DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA <a name="DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

&dataawsccmediaconnectflowsource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA {

}
```


### DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA <a name="DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

&dataawsccmediaconnectflowsource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA {

}
```


### DataAwsccMediaconnectFlowSourceTags <a name="DataAwsccMediaconnectFlowSourceTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

&dataawsccmediaconnectflowsource.DataAwsccMediaconnectFlowSourceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectFlowSourceDecryptionAOutputReference <a name="DataAwsccMediaconnectFlowSourceDecryptionAOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.NewDataAwsccMediaconnectFlowSourceDecryptionAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectFlowSourceDecryptionAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.deviceId">DeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionA">DataAwsccMediaconnectFlowSourceDecryptionA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector"></a>

```go
func ConstantInitializationVector() *string
```

- *Type:* *string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.deviceId"></a>

```go
func DeviceId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectFlowSourceDecryptionA
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceDecryptionA">DataAwsccMediaconnectFlowSourceDecryptionA</a>

---


### DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference <a name="DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.NewDataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn">BridgeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment">VpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn"></a>

```go
func BridgeArn() *string
```

- *Type:* *string

---

##### `VpcInterfaceAttachment`<sup>Required</sup> <a name="VpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment"></a>

```go
func VpcInterfaceAttachment() DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA</a>

---


### DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference <a name="DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.NewDataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName"></a>

```go
func VpcInterfaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---


### DataAwsccMediaconnectFlowSourceTagsList <a name="DataAwsccMediaconnectFlowSourceTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.NewDataAwsccMediaconnectFlowSourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediaconnectFlowSourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccMediaconnectFlowSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediaconnectFlowSourceTagsOutputReference <a name="DataAwsccMediaconnectFlowSourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowsource"

dataawsccmediaconnectflowsource.NewDataAwsccMediaconnectFlowSourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediaconnectFlowSourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTags">DataAwsccMediaconnectFlowSourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectFlowSourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowSource.DataAwsccMediaconnectFlowSourceTags">DataAwsccMediaconnectFlowSourceTags</a>

---



