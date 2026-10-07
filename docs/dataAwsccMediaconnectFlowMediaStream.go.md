# `dataAwsccMediaconnectFlowMediaStream` Submodule <a name="`dataAwsccMediaconnectFlowMediaStream` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectFlowMediaStream <a name="DataAwsccMediaconnectFlowMediaStream" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

dataawsccmediaconnectflowmediastream.NewDataAwsccMediaconnectFlowMediaStream(scope Construct, id *string, config DataAwsccMediaconnectFlowMediaStreamConfig) DataAwsccMediaconnectFlowMediaStream
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig">DataAwsccMediaconnectFlowMediaStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig">DataAwsccMediaconnectFlowMediaStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

dataawsccmediaconnectflowmediastream.DataAwsccMediaconnectFlowMediaStream_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

dataawsccmediaconnectflowmediastream.DataAwsccMediaconnectFlowMediaStream_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

dataawsccmediaconnectflowmediastream.DataAwsccMediaconnectFlowMediaStream_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

dataawsccmediaconnectflowmediastream.DataAwsccMediaconnectFlowMediaStream_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMediaconnectFlowMediaStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMediaconnectFlowMediaStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediaconnect_flow_media_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectFlowMediaStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.clockRate">ClockRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fmt">Fmt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamId">MediaStreamId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamName">MediaStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamType">MediaStreamType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList">DataAwsccMediaconnectFlowMediaStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.videoFormat">VideoFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.attributes"></a>

```go
func Attributes() DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference</a>

---

##### `ClockRate`<sup>Required</sup> <a name="ClockRate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.clockRate"></a>

```go
func ClockRate() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `Fmt`<sup>Required</sup> <a name="Fmt" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fmt"></a>

```go
func Fmt() *f64
```

- *Type:* *f64

---

##### `MediaStreamId`<sup>Required</sup> <a name="MediaStreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamId"></a>

```go
func MediaStreamId() *f64
```

- *Type:* *f64

---

##### `MediaStreamName`<sup>Required</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamName"></a>

```go
func MediaStreamName() *string
```

- *Type:* *string

---

##### `MediaStreamType`<sup>Required</sup> <a name="MediaStreamType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamType"></a>

```go
func MediaStreamType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tags"></a>

```go
func Tags() DataAwsccMediaconnectFlowMediaStreamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList">DataAwsccMediaconnectFlowMediaStreamTagsList</a>

---

##### `VideoFormat`<sup>Required</sup> <a name="VideoFormat" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.videoFormat"></a>

```go
func VideoFormat() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectFlowMediaStreamAttributes <a name="DataAwsccMediaconnectFlowMediaStreamAttributes" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

&dataawsccmediaconnectflowmediastream.DataAwsccMediaconnectFlowMediaStreamAttributes {

}
```


### DataAwsccMediaconnectFlowMediaStreamAttributesFmtp <a name="DataAwsccMediaconnectFlowMediaStreamAttributesFmtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

&dataawsccmediaconnectflowmediastream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp {

}
```


### DataAwsccMediaconnectFlowMediaStreamConfig <a name="DataAwsccMediaconnectFlowMediaStreamConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

&dataawsccmediaconnectflowmediastream.DataAwsccMediaconnectFlowMediaStreamConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/mediaconnect_flow_media_stream#id DataAwsccMediaconnectFlowMediaStream#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectFlowMediaStreamTags <a name="DataAwsccMediaconnectFlowMediaStreamTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

&dataawsccmediaconnectflowmediastream.DataAwsccMediaconnectFlowMediaStreamTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

dataawsccmediaconnectflowmediastream.NewDataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder">ChannelOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry">Colorimetry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate">ExactFramerate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par">Par</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range">Range</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode">ScanMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs">Tcs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp">DataAwsccMediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelOrder`<sup>Required</sup> <a name="ChannelOrder" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder"></a>

```go
func ChannelOrder() *string
```

- *Type:* *string

---

##### `Colorimetry`<sup>Required</sup> <a name="Colorimetry" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry"></a>

```go
func Colorimetry() *string
```

- *Type:* *string

---

##### `ExactFramerate`<sup>Required</sup> <a name="ExactFramerate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate"></a>

```go
func ExactFramerate() *string
```

- *Type:* *string

---

##### `Par`<sup>Required</sup> <a name="Par" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par"></a>

```go
func Par() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range"></a>

```go
func Range() *string
```

- *Type:* *string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode"></a>

```go
func ScanMode() *string
```

- *Type:* *string

---

##### `Tcs`<sup>Required</sup> <a name="Tcs" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs"></a>

```go
func Tcs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectFlowMediaStreamAttributesFmtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp">DataAwsccMediaconnectFlowMediaStreamAttributesFmtp</a>

---


### DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

dataawsccmediaconnectflowmediastream.NewDataAwsccMediaconnectFlowMediaStreamAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp">Fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.lang">Lang</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes">DataAwsccMediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fmtp`<sup>Required</sup> <a name="Fmtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp"></a>

```go
func Fmtp() DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference</a>

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.lang"></a>

```go
func Lang() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectFlowMediaStreamAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes">DataAwsccMediaconnectFlowMediaStreamAttributes</a>

---


### DataAwsccMediaconnectFlowMediaStreamTagsList <a name="DataAwsccMediaconnectFlowMediaStreamTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

dataawsccmediaconnectflowmediastream.NewDataAwsccMediaconnectFlowMediaStreamTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediaconnectFlowMediaStreamTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.get"></a>

```go
func Get(index *f64) DataAwsccMediaconnectFlowMediaStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediaconnectFlowMediaStreamTagsOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectflowmediastream"

dataawsccmediaconnectflowmediastream.NewDataAwsccMediaconnectFlowMediaStreamTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediaconnectFlowMediaStreamTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags">DataAwsccMediaconnectFlowMediaStreamTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectFlowMediaStreamTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags">DataAwsccMediaconnectFlowMediaStreamTags</a>

---



