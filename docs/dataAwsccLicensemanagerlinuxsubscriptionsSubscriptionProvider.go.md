# `dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule <a name="`dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerlinuxsubscriptions_subscription_provider awscc_licensemanagerlinuxsubscriptions_subscription_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider"

dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider.NewDataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider(scope Construct, id *string, config DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig) DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider"

dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider"

dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider"

dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider"

dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerlinuxsubscriptions_subscription_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime">LastSuccessfulDataRetrievalTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn">SubscriptionProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource">SubscriptionProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus">SubscriptionProviderStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage">SubscriptionProviderStatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `LastSuccessfulDataRetrievalTime`<sup>Required</sup> <a name="LastSuccessfulDataRetrievalTime" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime"></a>

```go
func LastSuccessfulDataRetrievalTime() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `SubscriptionProviderArn`<sup>Required</sup> <a name="SubscriptionProviderArn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn"></a>

```go
func SubscriptionProviderArn() *string
```

- *Type:* *string

---

##### `SubscriptionProviderSource`<sup>Required</sup> <a name="SubscriptionProviderSource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource"></a>

```go
func SubscriptionProviderSource() *string
```

- *Type:* *string

---

##### `SubscriptionProviderStatus`<sup>Required</sup> <a name="SubscriptionProviderStatus" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus"></a>

```go
func SubscriptionProviderStatus() *string
```

- *Type:* *string

---

##### `SubscriptionProviderStatusMessage`<sup>Required</sup> <a name="SubscriptionProviderStatusMessage" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage"></a>

```go
func SubscriptionProviderStatusMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags"></a>

```go
func Tags() DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider"

&dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/licensemanagerlinuxsubscriptions_subscription_provider#id DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider"

&dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider"

dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider.NewDataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference <a name="DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider"

dataawscclicensemanagerlinuxsubscriptionssubscriptionprovider.NewDataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProvider.DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags">DataAwsccLicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>

---



