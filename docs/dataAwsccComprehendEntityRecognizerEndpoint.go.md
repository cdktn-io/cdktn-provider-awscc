# `dataAwsccComprehendEntityRecognizerEndpoint` Submodule <a name="`dataAwsccComprehendEntityRecognizerEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComprehendEntityRecognizerEndpoint <a name="DataAwsccComprehendEntityRecognizerEndpoint" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer_endpoint awscc_comprehend_entity_recognizer_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizerendpoint"

dataawscccomprehendentityrecognizerendpoint.NewDataAwsccComprehendEntityRecognizerEndpoint(scope Construct, id *string, config DataAwsccComprehendEntityRecognizerEndpointConfig) DataAwsccComprehendEntityRecognizerEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig">DataAwsccComprehendEntityRecognizerEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig">DataAwsccComprehendEntityRecognizerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizerendpoint"

dataawscccomprehendentityrecognizerendpoint.DataAwsccComprehendEntityRecognizerEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizerendpoint"

dataawscccomprehendentityrecognizerendpoint.DataAwsccComprehendEntityRecognizerEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizerendpoint"

dataawscccomprehendentityrecognizerendpoint.DataAwsccComprehendEntityRecognizerEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizerendpoint"

dataawscccomprehendentityrecognizerendpoint.DataAwsccComprehendEntityRecognizerEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccComprehendEntityRecognizerEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccComprehendEntityRecognizerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComprehendEntityRecognizerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.currentInferenceUnits">CurrentInferenceUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits">DesiredInferenceUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.endpointStatus">EndpointStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.flywheelArn">FlywheelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList">DataAwsccComprehendEntityRecognizerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `CurrentInferenceUnits`<sup>Required</sup> <a name="CurrentInferenceUnits" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.currentInferenceUnits"></a>

```go
func CurrentInferenceUnits() *f64
```

- *Type:* *f64

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn"></a>

```go
func DataAccessRoleArn() *string
```

- *Type:* *string

---

##### `DesiredInferenceUnits`<sup>Required</sup> <a name="DesiredInferenceUnits" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits"></a>

```go
func DesiredInferenceUnits() *f64
```

- *Type:* *f64

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.endpointStatus"></a>

```go
func EndpointStatus() *string
```

- *Type:* *string

---

##### `FlywheelArn`<sup>Required</sup> <a name="FlywheelArn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.flywheelArn"></a>

```go
func FlywheelArn() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.tags"></a>

```go
func Tags() DataAwsccComprehendEntityRecognizerEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList">DataAwsccComprehendEntityRecognizerEndpointTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComprehendEntityRecognizerEndpointConfig <a name="DataAwsccComprehendEntityRecognizerEndpointConfig" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizerendpoint"

&dataawscccomprehendentityrecognizerendpoint.DataAwsccComprehendEntityRecognizerEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/comprehend_entity_recognizer_endpoint#id DataAwsccComprehendEntityRecognizerEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComprehendEntityRecognizerEndpointTags <a name="DataAwsccComprehendEntityRecognizerEndpointTags" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizerendpoint"

&dataawscccomprehendentityrecognizerendpoint.DataAwsccComprehendEntityRecognizerEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComprehendEntityRecognizerEndpointTagsList <a name="DataAwsccComprehendEntityRecognizerEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizerendpoint"

dataawscccomprehendentityrecognizerendpoint.NewDataAwsccComprehendEntityRecognizerEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComprehendEntityRecognizerEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference <a name="DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomprehendentityrecognizerendpoint"

dataawscccomprehendentityrecognizerendpoint.NewDataAwsccComprehendEntityRecognizerEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTags">DataAwsccComprehendEntityRecognizerEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComprehendEntityRecognizerEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComprehendEntityRecognizerEndpoint.DataAwsccComprehendEntityRecognizerEndpointTags">DataAwsccComprehendEntityRecognizerEndpointTags</a>

---



