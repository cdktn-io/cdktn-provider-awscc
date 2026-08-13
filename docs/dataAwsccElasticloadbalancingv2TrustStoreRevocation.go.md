# `dataAwsccElasticloadbalancingv2TrustStoreRevocation` Submodule <a name="`dataAwsccElasticloadbalancingv2TrustStoreRevocation` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingv2TrustStoreRevocation <a name="DataAwsccElasticloadbalancingv2TrustStoreRevocation" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticloadbalancingv2_trust_store_revocation awscc_elasticloadbalancingv2_trust_store_revocation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

dataawsccelasticloadbalancingv2truststorerevocation.NewDataAwsccElasticloadbalancingv2TrustStoreRevocation(scope Construct, id *string, config DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig) DataAwsccElasticloadbalancingv2TrustStoreRevocation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig">DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig">DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2TrustStoreRevocation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

dataawsccelasticloadbalancingv2truststorerevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

dataawsccelasticloadbalancingv2truststorerevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

dataawsccelasticloadbalancingv2truststorerevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

dataawsccelasticloadbalancingv2truststorerevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2TrustStoreRevocation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccElasticloadbalancingv2TrustStoreRevocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccElasticloadbalancingv2TrustStoreRevocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticloadbalancingv2_trust_store_revocation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingv2TrustStoreRevocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.revocationContents">RevocationContents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList">DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.revocationId">RevocationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.trustStoreRevocations">TrustStoreRevocations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList">DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `RevocationContents`<sup>Required</sup> <a name="RevocationContents" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.revocationContents"></a>

```go
func RevocationContents() DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList">DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList</a>

---

##### `RevocationId`<sup>Required</sup> <a name="RevocationId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.revocationId"></a>

```go
func RevocationId() *f64
```

- *Type:* *f64

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.trustStoreArn"></a>

```go
func TrustStoreArn() *string
```

- *Type:* *string

---

##### `TrustStoreRevocations`<sup>Required</sup> <a name="TrustStoreRevocations" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.trustStoreRevocations"></a>

```go
func TrustStoreRevocations() DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList">DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig <a name="DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

&dataawsccelasticloadbalancingv2truststorerevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticloadbalancingv2_trust_store_revocation#id DataAwsccElasticloadbalancingv2TrustStoreRevocation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents <a name="DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

&dataawsccelasticloadbalancingv2truststorerevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents {

}
```


### DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations <a name="DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

&dataawsccelasticloadbalancingv2truststorerevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList <a name="DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

dataawsccelasticloadbalancingv2truststorerevocation.NewDataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference <a name="DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

dataawsccelasticloadbalancingv2truststorerevocation.NewDataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.revocationType">RevocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents">DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevocationType`<sup>Required</sup> <a name="RevocationType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.revocationType"></a>

```go
func RevocationType() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.s3ObjectVersion"></a>

```go
func S3ObjectVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents">DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents</a>

---


### DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList <a name="DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

dataawsccelasticloadbalancingv2truststorerevocation.NewDataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference <a name="DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2truststorerevocation"

dataawsccelasticloadbalancingv2truststorerevocation.NewDataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.numberOfRevokedEntries">NumberOfRevokedEntries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.revocationId">RevocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.revocationType">RevocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations">DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfRevokedEntries`<sup>Required</sup> <a name="NumberOfRevokedEntries" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.numberOfRevokedEntries"></a>

```go
func NumberOfRevokedEntries() *f64
```

- *Type:* *f64

---

##### `RevocationId`<sup>Required</sup> <a name="RevocationId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.revocationId"></a>

```go
func RevocationId() *string
```

- *Type:* *string

---

##### `RevocationType`<sup>Required</sup> <a name="RevocationType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.revocationType"></a>

```go
func RevocationType() *string
```

- *Type:* *string

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.trustStoreArn"></a>

```go
func TrustStoreArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TrustStoreRevocation.DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations">DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations</a>

---



