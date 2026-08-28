# `dataAwsccCertificatemanagerAcmeDomainValidation` Submodule <a name="`dataAwsccCertificatemanagerAcmeDomainValidation` Submodule" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCertificatemanagerAcmeDomainValidation <a name="DataAwsccCertificatemanagerAcmeDomainValidation" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.NewDataAwsccCertificatemanagerAcmeDomainValidation(scope Construct, id *string, config DataAwsccCertificatemanagerAcmeDomainValidationConfig) DataAwsccCertificatemanagerAcmeDomainValidation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig">DataAwsccCertificatemanagerAcmeDomainValidationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig">DataAwsccCertificatemanagerAcmeDomainValidationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.DataAwsccCertificatemanagerAcmeDomainValidation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.DataAwsccCertificatemanagerAcmeDomainValidation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.DataAwsccCertificatemanagerAcmeDomainValidation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.DataAwsccCertificatemanagerAcmeDomainValidation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCertificatemanagerAcmeDomainValidation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCertificatemanagerAcmeDomainValidation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/certificatemanager_acme_domain_validation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCertificatemanagerAcmeDomainValidation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.prevalidationOptions">PrevalidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList">DataAwsccCertificatemanagerAcmeDomainValidationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.acmeEndpointArn"></a>

```go
func AcmeEndpointArn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `PrevalidationOptions`<sup>Required</sup> <a name="PrevalidationOptions" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.prevalidationOptions"></a>

```go
func PrevalidationOptions() DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tags"></a>

```go
func Tags() DataAwsccCertificatemanagerAcmeDomainValidationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList">DataAwsccCertificatemanagerAcmeDomainValidationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCertificatemanagerAcmeDomainValidationConfig <a name="DataAwsccCertificatemanagerAcmeDomainValidationConfig" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

&dataawscccertificatemanageracmedomainvalidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/certificatemanager_acme_domain_validation#id DataAwsccCertificatemanagerAcmeDomainValidation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

&dataawscccertificatemanageracmedomainvalidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions {

}
```


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

&dataawscccertificatemanageracmedomainvalidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation {

}
```


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

&dataawscccertificatemanageracmedomainvalidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope {

}
```


### DataAwsccCertificatemanagerAcmeDomainValidationTags <a name="DataAwsccCertificatemanagerAcmeDomainValidationTags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

&dataawscccertificatemanageracmedomainvalidation.DataAwsccCertificatemanagerAcmeDomainValidationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.NewDataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain">ExactDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains">Subdomains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards">Wildcards</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactDomain`<sup>Required</sup> <a name="ExactDomain" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain"></a>

```go
func ExactDomain() *string
```

- *Type:* *string

---

##### `Subdomains`<sup>Required</sup> <a name="Subdomains" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains"></a>

```go
func Subdomains() *string
```

- *Type:* *string

---

##### `Wildcards`<sup>Required</sup> <a name="Wildcards" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards"></a>

```go
func Wildcards() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

---


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.NewDataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope">DomainScope</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainScope`<sup>Required</sup> <a name="DomainScope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope"></a>

```go
func DomainScope() DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a>

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

---


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.NewDataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation">DnsPrevalidation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsPrevalidation`<sup>Required</sup> <a name="DnsPrevalidation" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation"></a>

```go
func DnsPrevalidation() DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

---


### DataAwsccCertificatemanagerAcmeDomainValidationTagsList <a name="DataAwsccCertificatemanagerAcmeDomainValidationTagsList" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.NewDataAwsccCertificatemanagerAcmeDomainValidationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCertificatemanagerAcmeDomainValidationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccertificatemanageracmedomainvalidation"

dataawscccertificatemanageracmedomainvalidation.NewDataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags">DataAwsccCertificatemanagerAcmeDomainValidationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCertificatemanagerAcmeDomainValidationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags">DataAwsccCertificatemanagerAcmeDomainValidationTags</a>

---



