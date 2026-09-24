# `dataAwsccComprehendDocumentClassifierEndpoint` Submodule <a name="`dataAwsccComprehendDocumentClassifierEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendDocumentClassifierEndpoint <a name="DataAwsccComprehendDocumentClassifierEndpoint" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/comprehend_document_classifier_endpoint awscc_comprehend_document_classifier_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehenddocumentclassifierendpoint"

dataawscccomprehenddocumentclassifierendpoint.NewDataAwsccComprehendDocumentClassifierEndpoint(scope Construct, id *string, config DataAwsccComprehendDocumentClassifierEndpointConfig) DataAwsccComprehendDocumentClassifierEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig">DataAwsccComprehendDocumentClassifierEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig">DataAwsccComprehendDocumentClassifierEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehenddocumentclassifierendpoint"

dataawscccomprehenddocumentclassifierendpoint.DataAwsccComprehendDocumentClassifierEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehenddocumentclassifierendpoint"

dataawscccomprehenddocumentclassifierendpoint.DataAwsccComprehendDocumentClassifierEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehenddocumentclassifierendpoint"

dataawscccomprehenddocumentclassifierendpoint.DataAwsccComprehendDocumentClassifierEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehenddocumentclassifierendpoint"

dataawscccomprehenddocumentclassifierendpoint.DataAwsccComprehendDocumentClassifierEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccComprehendDocumentClassifierEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccComprehendDocumentClassifierEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/comprehend_document_classifier_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendDocumentClassifierEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.currentInferenceUnits">CurrentInferenceUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits">DesiredInferenceUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList">DataAwsccComprehendDocumentClassifierEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `CurrentInferenceUnits`<sup>Required</sup> <a name="CurrentInferenceUnits" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.currentInferenceUnits"></a>

```go
func CurrentInferenceUnits() *f64
```

- *Type:* *f64

---

##### `DesiredInferenceUnits`<sup>Required</sup> <a name="DesiredInferenceUnits" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits"></a>

```go
func DesiredInferenceUnits() *f64
```

- *Type:* *f64

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tags"></a>

```go
func Tags() DataAwsccComprehendDocumentClassifierEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList">DataAwsccComprehendDocumentClassifierEndpointTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendDocumentClassifierEndpointConfig <a name="DataAwsccComprehendDocumentClassifierEndpointConfig" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehenddocumentclassifierendpoint"

&dataawscccomprehenddocumentclassifierendpoint.DataAwsccComprehendDocumentClassifierEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/comprehend_document_classifier_endpoint#id DataAwsccComprehendDocumentClassifierEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendDocumentClassifierEndpointTags <a name="DataAwsccComprehendDocumentClassifierEndpointTags" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehenddocumentclassifierendpoint"

&dataawscccomprehenddocumentclassifierendpoint.DataAwsccComprehendDocumentClassifierEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendDocumentClassifierEndpointTagsList <a name="DataAwsccComprehendDocumentClassifierEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehenddocumentclassifierendpoint"

dataawscccomprehenddocumentclassifierendpoint.NewDataAwsccComprehendDocumentClassifierEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComprehendDocumentClassifierEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference <a name="DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehenddocumentclassifierendpoint"

dataawscccomprehenddocumentclassifierendpoint.NewDataAwsccComprehendDocumentClassifierEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags">DataAwsccComprehendDocumentClassifierEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendDocumentClassifierEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendDocumentClassifierEndpoint.DataAwsccComprehendDocumentClassifierEndpointTags">DataAwsccComprehendDocumentClassifierEndpointTags</a>

---



