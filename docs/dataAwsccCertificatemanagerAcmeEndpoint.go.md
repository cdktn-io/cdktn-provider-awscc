# `dataAwsccCertificatemanagerAcmeEndpoint` Submodule <a name="`dataAwsccCertificatemanagerAcmeEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCertificatemanagerAcmeEndpoint <a name="DataAwsccCertificatemanagerAcmeEndpoint" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_endpoint awscc_certificatemanager_acme_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.NewDataAwsccCertificatemanagerAcmeEndpoint(scope Construct, id *string, config DataAwsccCertificatemanagerAcmeEndpointConfig) DataAwsccCertificatemanagerAcmeEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig">DataAwsccCertificatemanagerAcmeEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig">DataAwsccCertificatemanagerAcmeEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.DataAwsccCertificatemanagerAcmeEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.DataAwsccCertificatemanagerAcmeEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.DataAwsccCertificatemanagerAcmeEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.DataAwsccCertificatemanagerAcmeEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCertificatemanagerAcmeEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCertificatemanagerAcmeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCertificatemanagerAcmeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.authorizationBehavior">AuthorizationBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.certificateAuthority">CertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.certificateTags">CertificateTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList">DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.contact">Contact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList">DataAwsccCertificatemanagerAcmeEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.acmeEndpointArn"></a>

```go
func AcmeEndpointArn() *string
```

- *Type:* *string

---

##### `AuthorizationBehavior`<sup>Required</sup> <a name="AuthorizationBehavior" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.authorizationBehavior"></a>

```go
func AuthorizationBehavior() *string
```

- *Type:* *string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.certificateAuthority"></a>

```go
func CertificateAuthority() DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a>

---

##### `CertificateTags`<sup>Required</sup> <a name="CertificateTags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.certificateTags"></a>

```go
func CertificateTags() DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList">DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList</a>

---

##### `Contact`<sup>Required</sup> <a name="Contact" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.contact"></a>

```go
func Contact() *string
```

- *Type:* *string

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.endpointUrl"></a>

```go
func EndpointUrl() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.tags"></a>

```go
func Tags() DataAwsccCertificatemanagerAcmeEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList">DataAwsccCertificatemanagerAcmeEndpointTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority <a name="DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

&dataawscccertificatemanageracmeendpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority {

}
```


### DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority <a name="DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

&dataawscccertificatemanageracmeendpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority {

}
```


### DataAwsccCertificatemanagerAcmeEndpointCertificateTags <a name="DataAwsccCertificatemanagerAcmeEndpointCertificateTags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

&dataawscccertificatemanageracmeendpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTags {

}
```


### DataAwsccCertificatemanagerAcmeEndpointConfig <a name="DataAwsccCertificatemanagerAcmeEndpointConfig" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

&dataawscccertificatemanageracmeendpoint.DataAwsccCertificatemanagerAcmeEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_endpoint#id DataAwsccCertificatemanagerAcmeEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCertificatemanagerAcmeEndpointTags <a name="DataAwsccCertificatemanagerAcmeEndpointTags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

&dataawscccertificatemanageracmeendpoint.DataAwsccCertificatemanagerAcmeEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference <a name="DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.NewDataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority">PublicCertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority">DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicCertificateAuthority`<sup>Required</sup> <a name="PublicCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority"></a>

```go
func PublicCertificateAuthority() DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority">DataAwsccCertificatemanagerAcmeEndpointCertificateAuthority</a>

---


### DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference <a name="DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.NewDataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms">AllowedKeyAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedKeyAlgorithms`<sup>Required</sup> <a name="AllowedKeyAlgorithms" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms"></a>

```go
func AllowedKeyAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">DataAwsccCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---


### DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList <a name="DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.NewDataAwsccCertificatemanagerAcmeEndpointCertificateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference <a name="DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.NewDataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTags">DataAwsccCertificatemanagerAcmeEndpointCertificateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCertificatemanagerAcmeEndpointCertificateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointCertificateTags">DataAwsccCertificatemanagerAcmeEndpointCertificateTags</a>

---


### DataAwsccCertificatemanagerAcmeEndpointTagsList <a name="DataAwsccCertificatemanagerAcmeEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.NewDataAwsccCertificatemanagerAcmeEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCertificatemanagerAcmeEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference <a name="DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmeendpoint"

dataawscccertificatemanageracmeendpoint.NewDataAwsccCertificatemanagerAcmeEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTags">DataAwsccCertificatemanagerAcmeEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCertificatemanagerAcmeEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeEndpoint.DataAwsccCertificatemanagerAcmeEndpointTags">DataAwsccCertificatemanagerAcmeEndpointTags</a>

---



