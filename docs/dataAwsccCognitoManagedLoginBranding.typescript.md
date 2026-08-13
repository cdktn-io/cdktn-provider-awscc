# `dataAwsccCognitoManagedLoginBranding` Submodule <a name="`dataAwsccCognitoManagedLoginBranding` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoManagedLoginBranding <a name="DataAwsccCognitoManagedLoginBranding" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_managed_login_branding awscc_cognito_managed_login_branding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.Initializer"></a>

```typescript
import { dataAwsccCognitoManagedLoginBranding } from '@cdktn/provider-awscc'

new dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding(scope: Construct, id: string, config: DataAwsccCognitoManagedLoginBrandingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig">DataAwsccCognitoManagedLoginBrandingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig">DataAwsccCognitoManagedLoginBrandingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isConstruct"></a>

```typescript
import { dataAwsccCognitoManagedLoginBranding } from '@cdktn/provider-awscc'

dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isTerraformElement"></a>

```typescript
import { dataAwsccCognitoManagedLoginBranding } from '@cdktn/provider-awscc'

dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isTerraformDataSource"></a>

```typescript
import { dataAwsccCognitoManagedLoginBranding } from '@cdktn/provider-awscc'

dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.generateConfigForImport"></a>

```typescript
import { dataAwsccCognitoManagedLoginBranding } from '@cdktn/provider-awscc'

dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCognitoManagedLoginBranding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCognitoManagedLoginBranding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_managed_login_branding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoManagedLoginBranding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.assets">assets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList">DataAwsccCognitoManagedLoginBrandingAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.managedLoginBrandingId">managedLoginBrandingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.returnMergedResources">returnMergedResources</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.settings">settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.useCognitoProvidedValues">useCognitoProvidedValues</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.assets"></a>

```typescript
public readonly assets: DataAwsccCognitoManagedLoginBrandingAssetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList">DataAwsccCognitoManagedLoginBrandingAssetsList</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `managedLoginBrandingId`<sup>Required</sup> <a name="managedLoginBrandingId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.managedLoginBrandingId"></a>

```typescript
public readonly managedLoginBrandingId: string;
```

- *Type:* string

---

##### `returnMergedResources`<sup>Required</sup> <a name="returnMergedResources" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.returnMergedResources"></a>

```typescript
public readonly returnMergedResources: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.settings"></a>

```typescript
public readonly settings: string;
```

- *Type:* string

---

##### `useCognitoProvidedValues`<sup>Required</sup> <a name="useCognitoProvidedValues" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.useCognitoProvidedValues"></a>

```typescript
public readonly useCognitoProvidedValues: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBranding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoManagedLoginBrandingAssets <a name="DataAwsccCognitoManagedLoginBrandingAssets" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssets.Initializer"></a>

```typescript
import { dataAwsccCognitoManagedLoginBranding } from '@cdktn/provider-awscc'

const dataAwsccCognitoManagedLoginBrandingAssets: dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssets = { ... }
```


### DataAwsccCognitoManagedLoginBrandingConfig <a name="DataAwsccCognitoManagedLoginBrandingConfig" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.Initializer"></a>

```typescript
import { dataAwsccCognitoManagedLoginBranding } from '@cdktn/provider-awscc'

const dataAwsccCognitoManagedLoginBrandingConfig: dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_managed_login_branding#id DataAwsccCognitoManagedLoginBranding#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoManagedLoginBrandingAssetsList <a name="DataAwsccCognitoManagedLoginBrandingAssetsList" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.Initializer"></a>

```typescript
import { dataAwsccCognitoManagedLoginBranding } from '@cdktn/provider-awscc'

new dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.get"></a>

```typescript
public get(index: number): DataAwsccCognitoManagedLoginBrandingAssetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCognitoManagedLoginBrandingAssetsOutputReference <a name="DataAwsccCognitoManagedLoginBrandingAssetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoManagedLoginBranding } from '@cdktn/provider-awscc'

new dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.bytes">bytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.colorMode">colorMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.extension">extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssets">DataAwsccCognitoManagedLoginBrandingAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.bytes"></a>

```typescript
public readonly bytes: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `colorMode`<sup>Required</sup> <a name="colorMode" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.colorMode"></a>

```typescript
public readonly colorMode: string;
```

- *Type:* string

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoManagedLoginBrandingAssets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoManagedLoginBranding.DataAwsccCognitoManagedLoginBrandingAssets">DataAwsccCognitoManagedLoginBrandingAssets</a>

---



