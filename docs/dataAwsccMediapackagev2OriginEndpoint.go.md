# `dataAwsccMediapackagev2OriginEndpoint` Submodule <a name="`dataAwsccMediapackagev2OriginEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagev2OriginEndpoint <a name="DataAwsccMediapackagev2OriginEndpoint" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediapackagev2_origin_endpoint awscc_mediapackagev2_origin_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpoint(scope Construct, id *string, config DataAwsccMediapackagev2OriginEndpointConfig) DataAwsccMediapackagev2OriginEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig">DataAwsccMediapackagev2OriginEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig">DataAwsccMediapackagev2OriginEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMediapackagev2OriginEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMediapackagev2OriginEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediapackagev2_origin_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagev2OriginEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelGroupName">ChannelGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.containerType">ContainerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifests">DashManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList">DataAwsccMediapackagev2OriginEndpointDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifestUrls">DashManifestUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration">ForceEndpointErrorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifests">HlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList">DataAwsccMediapackagev2OriginEndpointHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifestUrls">HlsManifestUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifests">LowLatencyHlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls">LowLatencyHlsManifestUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifests">MssManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList">DataAwsccMediapackagev2OriginEndpointMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifestUrls">MssManifestUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.originEndpointName">OriginEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.segment">Segment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.startoverWindowSeconds">StartoverWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList">DataAwsccMediapackagev2OriginEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.uriSeparator">UriSeparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelGroupName"></a>

```go
func ChannelGroupName() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.containerType"></a>

```go
func ContainerType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DashManifests`<sup>Required</sup> <a name="DashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifests"></a>

```go
func DashManifests() DataAwsccMediapackagev2OriginEndpointDashManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList">DataAwsccMediapackagev2OriginEndpointDashManifestsList</a>

---

##### `DashManifestUrls`<sup>Required</sup> <a name="DashManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifestUrls"></a>

```go
func DashManifestUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForceEndpointErrorConfiguration`<sup>Required</sup> <a name="ForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration"></a>

```go
func ForceEndpointErrorConfiguration() DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a>

---

##### `HlsManifests`<sup>Required</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifests"></a>

```go
func HlsManifests() DataAwsccMediapackagev2OriginEndpointHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList">DataAwsccMediapackagev2OriginEndpointHlsManifestsList</a>

---

##### `HlsManifestUrls`<sup>Required</sup> <a name="HlsManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifestUrls"></a>

```go
func HlsManifestUrls() *[]*string
```

- *Type:* *[]*string

---

##### `LowLatencyHlsManifests`<sup>Required</sup> <a name="LowLatencyHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifests"></a>

```go
func LowLatencyHlsManifests() DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList</a>

---

##### `LowLatencyHlsManifestUrls`<sup>Required</sup> <a name="LowLatencyHlsManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls"></a>

```go
func LowLatencyHlsManifestUrls() *[]*string
```

- *Type:* *[]*string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `MssManifests`<sup>Required</sup> <a name="MssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifests"></a>

```go
func MssManifests() DataAwsccMediapackagev2OriginEndpointMssManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList">DataAwsccMediapackagev2OriginEndpointMssManifestsList</a>

---

##### `MssManifestUrls`<sup>Required</sup> <a name="MssManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifestUrls"></a>

```go
func MssManifestUrls() *[]*string
```

- *Type:* *[]*string

---

##### `OriginEndpointName`<sup>Required</sup> <a name="OriginEndpointName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.originEndpointName"></a>

```go
func OriginEndpointName() *string
```

- *Type:* *string

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.segment"></a>

```go
func Segment() DataAwsccMediapackagev2OriginEndpointSegmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentOutputReference</a>

---

##### `StartoverWindowSeconds`<sup>Required</sup> <a name="StartoverWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.startoverWindowSeconds"></a>

```go
func StartoverWindowSeconds() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tags"></a>

```go
func Tags() DataAwsccMediapackagev2OriginEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList">DataAwsccMediapackagev2OriginEndpointTagsList</a>

---

##### `UriSeparator`<sup>Required</sup> <a name="UriSeparator" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.uriSeparator"></a>

```go
func UriSeparator() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagev2OriginEndpointConfig <a name="DataAwsccMediapackagev2OriginEndpointConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediapackagev2_origin_endpoint#id DataAwsccMediapackagev2OriginEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediapackagev2OriginEndpointDashManifests <a name="DataAwsccMediapackagev2OriginEndpointDashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifests {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration {

}
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming {

}
```


### DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration <a name="DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration {

}
```


### DataAwsccMediapackagev2OriginEndpointHlsManifests <a name="DataAwsccMediapackagev2OriginEndpointHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests {

}
```


### DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration {

}
```


### DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls {

}
```


### DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag {

}
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests {

}
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration {

}
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls {

}
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag {

}
```


### DataAwsccMediapackagev2OriginEndpointMssManifests <a name="DataAwsccMediapackagev2OriginEndpointMssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointMssManifests {

}
```


### DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration {

}
```


### DataAwsccMediapackagev2OriginEndpointSegment <a name="DataAwsccMediapackagev2OriginEndpointSegment" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointSegment {

}
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryption <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption {

}
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod {

}
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider {

}
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration {

}
```


### DataAwsccMediapackagev2OriginEndpointSegmentScte <a name="DataAwsccMediapackagev2OriginEndpointSegmentScte" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte {

}
```


### DataAwsccMediapackagev2OriginEndpointTags <a name="DataAwsccMediapackagev2OriginEndpointTags" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

&dataawsccmediapackagev2originendpoint.DataAwsccMediapackagev2OriginEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime">FixedAvailabilityStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedAvailabilityStartTime`<sup>Required</sup> <a name="FixedAvailabilityStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime"></a>

```go
func FixedAvailabilityStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.get"></a>

```go
func Get(index *f64) DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority">DvbPriority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight">DvbWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation">ServiceLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DvbPriority`<sup>Required</sup> <a name="DvbPriority" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority"></a>

```go
func DvbPriority() *f64
```

- *Type:* *f64

---

##### `DvbWeight`<sup>Required</sup> <a name="DvbWeight" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight"></a>

```go
func DvbWeight() *f64
```

- *Type:* *f64

---

##### `ServiceLocation`<sup>Required</sup> <a name="ServiceLocation" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation"></a>

```go
func ServiceLocation() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get"></a>

```go
func Get(index *f64) DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability">Probability</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl">ReportingUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Probability`<sup>Required</sup> <a name="Probability" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability"></a>

```go
func Probability() *f64
```

- *Type:* *f64

---

##### `ReportingUrl`<sup>Required</sup> <a name="ReportingUrl" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl"></a>

```go
func ReportingUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily">FontFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily"></a>

```go
func FontFamily() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics">ErrorMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload">FontDownload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorMetrics`<sup>Required</sup> <a name="ErrorMetrics" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics"></a>

```go
func ErrorMetrics() DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a>

---

##### `FontDownload`<sup>Required</sup> <a name="FontDownload" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload"></a>

```go
func FontDownload() DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```go
func ClipStartTime() *string
```

- *Type:* *string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```go
func DrmSettings() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```go
func ManifestFilter() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```go
func TimeDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsList <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediapackagev2OriginEndpointDashManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.get"></a>

```go
func Get(index *f64) DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern">AudioTimelinePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration">AvailabilityStartTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls">BaseUrls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness">Compactness</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling">DrmSignaling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings">DvbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds">MinUpdatePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers">PeriodTriggers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles">Profiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation">ProgramInformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash">ScteDash</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat">SegmentTemplateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration">SubtitleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds">SuggestedPresentationDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType">UriPathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming">UtcTiming</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests">DataAwsccMediapackagev2OriginEndpointDashManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioTimelinePattern`<sup>Required</sup> <a name="AudioTimelinePattern" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern"></a>

```go
func AudioTimelinePattern() *string
```

- *Type:* *string

---

##### `AvailabilityStartTimeConfiguration`<sup>Required</sup> <a name="AvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration"></a>

```go
func AvailabilityStartTimeConfiguration() DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a>

---

##### `BaseUrls`<sup>Required</sup> <a name="BaseUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls"></a>

```go
func BaseUrls() DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList</a>

---

##### `Compactness`<sup>Required</sup> <a name="Compactness" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness"></a>

```go
func Compactness() *string
```

- *Type:* *string

---

##### `DrmSignaling`<sup>Required</sup> <a name="DrmSignaling" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling"></a>

```go
func DrmSignaling() *string
```

- *Type:* *string

---

##### `DvbSettings`<sup>Required</sup> <a name="DvbSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings"></a>

```go
func DvbSettings() DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a>

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration"></a>

```go
func FilterConfiguration() DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a>

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `MinBufferTimeSeconds`<sup>Required</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```go
func MinBufferTimeSeconds() *f64
```

- *Type:* *f64

---

##### `MinUpdatePeriodSeconds`<sup>Required</sup> <a name="MinUpdatePeriodSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds"></a>

```go
func MinUpdatePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `PeriodTriggers`<sup>Required</sup> <a name="PeriodTriggers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers"></a>

```go
func PeriodTriggers() *[]*string
```

- *Type:* *[]*string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles"></a>

```go
func Profiles() *[]*string
```

- *Type:* *[]*string

---

##### `ProgramInformation`<sup>Required</sup> <a name="ProgramInformation" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation"></a>

```go
func ProgramInformation() DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a>

---

##### `ScteDash`<sup>Required</sup> <a name="ScteDash" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash"></a>

```go
func ScteDash() DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a>

---

##### `SegmentTemplateFormat`<sup>Required</sup> <a name="SegmentTemplateFormat" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat"></a>

```go
func SegmentTemplateFormat() *string
```

- *Type:* *string

---

##### `SubtitleConfiguration`<sup>Required</sup> <a name="SubtitleConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration"></a>

```go
func SubtitleConfiguration() DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a>

---

##### `SuggestedPresentationDelaySeconds`<sup>Required</sup> <a name="SuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds"></a>

```go
func SuggestedPresentationDelaySeconds() *f64
```

- *Type:* *f64

---

##### `UriPathType`<sup>Required</sup> <a name="UriPathType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType"></a>

```go
func UriPathType() *string
```

- *Type:* *string

---

##### `UtcTiming`<sup>Required</sup> <a name="UtcTiming" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming"></a>

```go
func UtcTiming() DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests">DataAwsccMediapackagev2OriginEndpointDashManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright">Copyright</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl">MoreInformationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Copyright`<sup>Required</sup> <a name="Copyright" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright"></a>

```go
func Copyright() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `MoreInformationUrl`<sup>Required</sup> <a name="MoreInformationUrl" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl"></a>

```go
func MoreInformationUrl() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash">AdMarkerDash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests">ScteInManifests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdMarkerDash`<sup>Required</sup> <a name="AdMarkerDash" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash"></a>

```go
func AdMarkerDash() *string
```

- *Type:* *string

---

##### `ScteInManifests`<sup>Required</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests"></a>

```go
func ScteInManifests() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration">TtmlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TtmlConfiguration`<sup>Required</sup> <a name="TtmlConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration"></a>

```go
func TtmlConfiguration() DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile">TtmlProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TtmlProfile`<sup>Required</sup> <a name="TtmlProfile" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile"></a>

```go
func TtmlProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode">TimingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource">TimingSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimingMode`<sup>Required</sup> <a name="TimingMode" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode"></a>

```go
func TimingMode() *string
```

- *Type:* *string

---

##### `TimingSource`<sup>Required</sup> <a name="TimingSource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource"></a>

```go
func TimingSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming</a>

---


### DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions">EndpointErrorConditions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointErrorConditions`<sup>Required</sup> <a name="EndpointErrorConditions" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions"></a>

```go
func EndpointErrorConditions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```go
func ClipStartTime() *string
```

- *Type:* *string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```go
func DrmSettings() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```go
func ManifestFilter() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```go
func TimeDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsList <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointHlsManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediapackagev2OriginEndpointHlsManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.get"></a>

```go
func Get(index *f64) DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName">ChildManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls">ScteHls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag">StartTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType">UriPathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest">UrlEncodeChildManifest</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests">DataAwsccMediapackagev2OriginEndpointHlsManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildManifestName`<sup>Required</sup> <a name="ChildManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName"></a>

```go
func ChildManifestName() *string
```

- *Type:* *string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration"></a>

```go
func FilterConfiguration() DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a>

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```go
func ProgramDateTimeIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `ScteHls`<sup>Required</sup> <a name="ScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls"></a>

```go
func ScteHls() DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a>

---

##### `StartTag`<sup>Required</sup> <a name="StartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag"></a>

```go
func StartTag() DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a>

---

##### `UriPathType`<sup>Required</sup> <a name="UriPathType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType"></a>

```go
func UriPathType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlEncodeChildManifest`<sup>Required</sup> <a name="UrlEncodeChildManifest" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```go
func UrlEncodeChildManifest() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointHlsManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests">DataAwsccMediapackagev2OriginEndpointHlsManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls">AdMarkerHls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests">ScteInManifests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdMarkerHls`<sup>Required</sup> <a name="AdMarkerHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```go
func AdMarkerHls() *string
```

- *Type:* *string

---

##### `ScteInManifests`<sup>Required</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```go
func ScteInManifests() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise">Precise</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset">TimeOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Precise`<sup>Required</sup> <a name="Precise" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise"></a>

```go
func Precise() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TimeOffset`<sup>Required</sup> <a name="TimeOffset" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```go
func TimeOffset() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```go
func ClipStartTime() *string
```

- *Type:* *string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```go
func DrmSettings() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```go
func ManifestFilter() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```go
func TimeDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.get"></a>

```go
func Get(index *f64) DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName">ChildManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls">ScteHls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag">StartTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType">UriPathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest">UrlEncodeChildManifest</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildManifestName`<sup>Required</sup> <a name="ChildManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName"></a>

```go
func ChildManifestName() *string
```

- *Type:* *string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration"></a>

```go
func FilterConfiguration() DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a>

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```go
func ProgramDateTimeIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `ScteHls`<sup>Required</sup> <a name="ScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls"></a>

```go
func ScteHls() DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a>

---

##### `StartTag`<sup>Required</sup> <a name="StartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag"></a>

```go
func StartTag() DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a>

---

##### `UriPathType`<sup>Required</sup> <a name="UriPathType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType"></a>

```go
func UriPathType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlEncodeChildManifest`<sup>Required</sup> <a name="UrlEncodeChildManifest" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```go
func UrlEncodeChildManifest() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls">AdMarkerHls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests">ScteInManifests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdMarkerHls`<sup>Required</sup> <a name="AdMarkerHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```go
func AdMarkerHls() *string
```

- *Type:* *string

---

##### `ScteInManifests`<sup>Required</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```go
func ScteInManifests() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise">Precise</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset">TimeOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Precise`<sup>Required</sup> <a name="Precise" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise"></a>

```go
func Precise() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TimeOffset`<sup>Required</sup> <a name="TimeOffset" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```go
func TimeOffset() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a>

---


### DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```go
func ClipStartTime() *string
```

- *Type:* *string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```go
func DrmSettings() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```go
func ManifestFilter() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```go
func TimeDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointMssManifestsList <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointMssManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediapackagev2OriginEndpointMssManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.get"></a>

```go
func Get(index *f64) DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout">ManifestLayout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests">DataAwsccMediapackagev2OriginEndpointMssManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration"></a>

```go
func FilterConfiguration() DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a>

---

##### `ManifestLayout`<sup>Required</sup> <a name="ManifestLayout" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout"></a>

```go
func ManifestLayout() *string
```

- *Type:* *string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointMssManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests">DataAwsccMediapackagev2OriginEndpointMssManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod">CmafEncryptionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod">IsmEncryptionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod">TsEncryptionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CmafEncryptionMethod`<sup>Required</sup> <a name="CmafEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod"></a>

```go
func CmafEncryptionMethod() *string
```

- *Type:* *string

---

##### `IsmEncryptionMethod`<sup>Required</sup> <a name="IsmEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod"></a>

```go
func IsmEncryptionMethod() *string
```

- *Type:* *string

---

##### `TsEncryptionMethod`<sup>Required</sup> <a name="TsEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod"></a>

```go
func TsEncryptionMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata">CmafExcludeSegmentDrmMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod">EncryptionMethod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds">KeyRotationIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption">DataAwsccMediapackagev2OriginEndpointSegmentEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CmafExcludeSegmentDrmMetadata`<sup>Required</sup> <a name="CmafExcludeSegmentDrmMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata"></a>

```go
func CmafExcludeSegmentDrmMetadata() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector"></a>

```go
func ConstantInitializationVector() *string
```

- *Type:* *string

---

##### `EncryptionMethod`<sup>Required</sup> <a name="EncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod"></a>

```go
func EncryptionMethod() DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a>

---

##### `KeyRotationIntervalSeconds`<sup>Required</sup> <a name="KeyRotationIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds"></a>

```go
func KeyRotationIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider"></a>

```go
func SpekeKeyProvider() DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointSegmentEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption">DataAwsccMediapackagev2OriginEndpointSegmentEncryption</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```go
func PresetSpeke20Audio() *string
```

- *Type:* *string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```go
func PresetSpeke20Video() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems">DrmSystems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DrmSystems`<sup>Required</sup> <a name="DrmSystems" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems"></a>

```go
func DrmSystems() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```go
func EncryptionContractConfiguration() DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointSegmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointSegmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams">IncludeIframeOnlyStreams</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode">OutputTimestampMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.scte">Scte</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles">TsIncludeDvbSubtitles</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup">TsUseAudioRenditionGroup</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment">DataAwsccMediapackagev2OriginEndpointSegment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.encryption"></a>

```go
func Encryption() DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference</a>

---

##### `IncludeIframeOnlyStreams`<sup>Required</sup> <a name="IncludeIframeOnlyStreams" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams"></a>

```go
func IncludeIframeOnlyStreams() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `OutputTimestampMode`<sup>Required</sup> <a name="OutputTimestampMode" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode"></a>

```go
func OutputTimestampMode() *string
```

- *Type:* *string

---

##### `Scte`<sup>Required</sup> <a name="Scte" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.scte"></a>

```go
func Scte() DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference</a>

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds"></a>

```go
func SegmentDurationSeconds() *f64
```

- *Type:* *f64

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `TsIncludeDvbSubtitles`<sup>Required</sup> <a name="TsIncludeDvbSubtitles" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles"></a>

```go
func TsIncludeDvbSubtitles() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TsUseAudioRenditionGroup`<sup>Required</sup> <a name="TsUseAudioRenditionGroup" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup"></a>

```go
func TsUseAudioRenditionGroup() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointSegment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment">DataAwsccMediapackagev2OriginEndpointSegment</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes">CustomAdTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter">ScteFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments">ScteInSegments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte">DataAwsccMediapackagev2OriginEndpointSegmentScte</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAdTypes`<sup>Required</sup> <a name="CustomAdTypes" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes"></a>

```go
func CustomAdTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ScteFilter`<sup>Required</sup> <a name="ScteFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter"></a>

```go
func ScteFilter() *[]*string
```

- *Type:* *[]*string

---

##### `ScteInSegments`<sup>Required</sup> <a name="ScteInSegments" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments"></a>

```go
func ScteInSegments() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointSegmentScte
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte">DataAwsccMediapackagev2OriginEndpointSegmentScte</a>

---


### DataAwsccMediapackagev2OriginEndpointTagsList <a name="DataAwsccMediapackagev2OriginEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediapackagev2OriginEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccMediapackagev2OriginEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediapackagev2OriginEndpointTagsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediapackagev2originendpoint"

dataawsccmediapackagev2originendpoint.NewDataAwsccMediapackagev2OriginEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediapackagev2OriginEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags">DataAwsccMediapackagev2OriginEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediapackagev2OriginEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags">DataAwsccMediapackagev2OriginEndpointTags</a>

---



