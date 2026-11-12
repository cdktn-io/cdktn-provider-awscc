# `dataAwsccMediaconnectDestinationEndpoint` Submodule <a name="`dataAwsccMediaconnectDestinationEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectDestinationEndpoint <a name="DataAwsccMediaconnectDestinationEndpoint" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_destination_endpoint awscc_mediaconnect_destination_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpoint(scope Construct, id *string, config DataAwsccMediaconnectDestinationEndpointConfig) DataAwsccMediaconnectDestinationEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig">DataAwsccMediaconnectDestinationEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig">DataAwsccMediaconnectDestinationEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMediaconnectDestinationEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMediaconnectDestinationEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMediaconnectDestinationEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_destination_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectDestinationEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.associatedResourceDetails">AssociatedResourceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.connectionState">ConnectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.destinationEndpointId">DestinationEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.lifecycleManagement">LifecycleManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.registrationState">RegistrationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList">DataAwsccMediaconnectDestinationEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociatedResourceDetails`<sup>Required</sup> <a name="AssociatedResourceDetails" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.associatedResourceDetails"></a>

```go
func AssociatedResourceDetails() DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.configuration"></a>

```go
func Configuration() DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference</a>

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.connectionState"></a>

```go
func ConnectionState() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationEndpointId`<sup>Required</sup> <a name="DestinationEndpointId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.destinationEndpointId"></a>

```go
func DestinationEndpointId() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `LifecycleManagement`<sup>Required</sup> <a name="LifecycleManagement" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.lifecycleManagement"></a>

```go
func LifecycleManagement() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `RegistrationState`<sup>Required</sup> <a name="RegistrationState" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.registrationState"></a>

```go
func RegistrationState() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.tags"></a>

```go
func Tags() DataAwsccMediaconnectDestinationEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList">DataAwsccMediaconnectDestinationEndpointTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails <a name="DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails {

}
```


### DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput <a name="DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput {

}
```


### DataAwsccMediaconnectDestinationEndpointConfig <a name="DataAwsccMediaconnectDestinationEndpointConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mediaconnect_destination_endpoint#id DataAwsccMediaconnectDestinationEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectDestinationEndpointConfiguration <a name="DataAwsccMediaconnectDestinationEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfiguration {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput <a name="DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandard <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandard" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener {

}
```


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase {

}
```


### DataAwsccMediaconnectDestinationEndpointTags <a name="DataAwsccMediaconnectDestinationEndpointTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

&dataawsccmediaconnectdestinationendpoint.DataAwsccMediaconnectDestinationEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference <a name="DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard">Standard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Required</sup> <a name="RouterInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.routerInput"></a>

```go
func RouterInput() DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.standard"></a>

```go
func Standard() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetails</a>

---


### DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference <a name="DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate">MaximumBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.maximumBitrate"></a>

```go
func MaximumBitrate() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput">DataAwsccMediaconnectDestinationEndpointAssociatedResourceDetailsRouterInput</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput">RouterInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfiguration">DataAwsccMediaconnectDestinationEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Required</sup> <a name="RouterInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.routerInput"></a>

```go
func RouterInput() DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.standard"></a>

```go
func Standard() DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfiguration">DataAwsccMediaconnectDestinationEndpointConfiguration</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn">RouterInputArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput">DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RouterInputArn`<sup>Required</sup> <a name="RouterInputArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.routerInputArn"></a>

```go
func RouterInputArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput">DataAwsccMediaconnectDestinationEndpointConfigurationRouterInput</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.public"></a>

```go
func Public() DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference</a>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.vpc"></a>

```go
func Vpc() DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfiguration</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get"></a>

```go
func Get(index *f64) DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRules</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules">DestinationAllowRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAllowRules`<sup>Required</sup> <a name="DestinationAllowRules" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.destinationAllowRules"></a>

```go
func DestinationAllowRules() DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicDestinationAllowRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublicOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationPublic</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationVpc</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration">DestinationNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType">DestinationNetworkingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard">DataAwsccMediaconnectDestinationEndpointConfigurationStandard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationNetworkingConfiguration`<sup>Required</sup> <a name="DestinationNetworkingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingConfiguration"></a>

```go
func DestinationNetworkingConfiguration() DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardDestinationNetworkingConfigurationOutputReference</a>

---

##### `DestinationNetworkingType`<sup>Required</sup> <a name="DestinationNetworkingType" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.destinationNetworkingType"></a>

```go
func DestinationNetworkingType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```go
func ProtocolConfiguration() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandard
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandard">DataAwsccMediaconnectDestinationEndpointConfigurationStandard</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```go
func Rist() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```go
func Rtp() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `SrtCaller`<sup>Required</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```go
func SrtCaller() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `SrtListener`<sup>Required</sup> <a name="SrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```go
func SrtListener() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfiguration</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort"></a>

```go
func DestinationIngestPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRist</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState">ForwardErrorCorrectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort"></a>

```go
func DestinationIngestPort() *f64
```

- *Type:* *f64

---

##### `ForwardErrorCorrectionState`<sup>Required</sup> <a name="ForwardErrorCorrectionState" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState"></a>

```go
func ForwardErrorCorrectionState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationRtp</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort">SourceListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase"></a>

```go
func EncryptionPassphrase() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceListenerPort"></a>

```go
func SourceListenerPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---


### DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.destinationIngestPort"></a>

```go
func DestinationIngestPort() *f64
```

- *Type:* *f64

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase"></a>

```go
func EncryptionPassphrase() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectDestinationEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---


### DataAwsccMediaconnectDestinationEndpointTagsList <a name="DataAwsccMediaconnectDestinationEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediaconnectDestinationEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccMediaconnectDestinationEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediaconnectDestinationEndpointTagsOutputReference <a name="DataAwsccMediaconnectDestinationEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmediaconnectdestinationendpoint"

dataawsccmediaconnectdestinationendpoint.NewDataAwsccMediaconnectDestinationEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediaconnectDestinationEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTags">DataAwsccMediaconnectDestinationEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectDestinationEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectDestinationEndpoint.DataAwsccMediaconnectDestinationEndpointTags">DataAwsccMediaconnectDestinationEndpointTags</a>

---



