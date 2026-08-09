# `dataAwsccSesEmailIdentity` Submodule <a name="`dataAwsccSesEmailIdentity` Submodule" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesEmailIdentity <a name="DataAwsccSesEmailIdentity" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_email_identity awscc_ses_email_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

new dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity(scope: Construct, id: string, config: DataAwsccSesEmailIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig">DataAwsccSesEmailIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig">DataAwsccSesEmailIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSesEmailIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isConstruct"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformElement"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformDataSource"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSesEmailIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSesEmailIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSesEmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesEmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.configurationSetAttributes">configurationSetAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference">DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimAttributes">dkimAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference">DataAwsccSesEmailIdentityDkimAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName1">dkimDnsTokenName1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName2">dkimDnsTokenName2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName3">dkimDnsTokenName3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue1">dkimDnsTokenValue1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue2">dkimDnsTokenValue2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue3">dkimDnsTokenValue3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference">DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.feedbackAttributes">feedbackAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference">DataAwsccSesEmailIdentityFeedbackAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.mailFromAttributes">mailFromAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference">DataAwsccSesEmailIdentityMailFromAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList">DataAwsccSesEmailIdentityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `configurationSetAttributes`<sup>Required</sup> <a name="configurationSetAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.configurationSetAttributes"></a>

```typescript
public readonly configurationSetAttributes: DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference">DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference</a>

---

##### `dkimAttributes`<sup>Required</sup> <a name="dkimAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimAttributes"></a>

```typescript
public readonly dkimAttributes: DataAwsccSesEmailIdentityDkimAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference">DataAwsccSesEmailIdentityDkimAttributesOutputReference</a>

---

##### `dkimDnsTokenName1`<sup>Required</sup> <a name="dkimDnsTokenName1" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName1"></a>

```typescript
public readonly dkimDnsTokenName1: string;
```

- *Type:* string

---

##### `dkimDnsTokenName2`<sup>Required</sup> <a name="dkimDnsTokenName2" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName2"></a>

```typescript
public readonly dkimDnsTokenName2: string;
```

- *Type:* string

---

##### `dkimDnsTokenName3`<sup>Required</sup> <a name="dkimDnsTokenName3" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenName3"></a>

```typescript
public readonly dkimDnsTokenName3: string;
```

- *Type:* string

---

##### `dkimDnsTokenValue1`<sup>Required</sup> <a name="dkimDnsTokenValue1" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue1"></a>

```typescript
public readonly dkimDnsTokenValue1: string;
```

- *Type:* string

---

##### `dkimDnsTokenValue2`<sup>Required</sup> <a name="dkimDnsTokenValue2" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue2"></a>

```typescript
public readonly dkimDnsTokenValue2: string;
```

- *Type:* string

---

##### `dkimDnsTokenValue3`<sup>Required</sup> <a name="dkimDnsTokenValue3" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimDnsTokenValue3"></a>

```typescript
public readonly dkimDnsTokenValue3: string;
```

- *Type:* string

---

##### `dkimSigningAttributes`<sup>Required</sup> <a name="dkimSigningAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.dkimSigningAttributes"></a>

```typescript
public readonly dkimSigningAttributes: DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference">DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

---

##### `feedbackAttributes`<sup>Required</sup> <a name="feedbackAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.feedbackAttributes"></a>

```typescript
public readonly feedbackAttributes: DataAwsccSesEmailIdentityFeedbackAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference">DataAwsccSesEmailIdentityFeedbackAttributesOutputReference</a>

---

##### `mailFromAttributes`<sup>Required</sup> <a name="mailFromAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.mailFromAttributes"></a>

```typescript
public readonly mailFromAttributes: DataAwsccSesEmailIdentityMailFromAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference">DataAwsccSesEmailIdentityMailFromAttributesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.tags"></a>

```typescript
public readonly tags: DataAwsccSesEmailIdentityTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList">DataAwsccSesEmailIdentityTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesEmailIdentityConfig <a name="DataAwsccSesEmailIdentityConfig" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

const dataAwsccSesEmailIdentityConfig: dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_email_identity#id DataAwsccSesEmailIdentity#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesEmailIdentityConfigurationSetAttributes <a name="DataAwsccSesEmailIdentityConfigurationSetAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

const dataAwsccSesEmailIdentityConfigurationSetAttributes: dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes = { ... }
```


### DataAwsccSesEmailIdentityDkimAttributes <a name="DataAwsccSesEmailIdentityDkimAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

const dataAwsccSesEmailIdentityDkimAttributes: dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes = { ... }
```


### DataAwsccSesEmailIdentityDkimSigningAttributes <a name="DataAwsccSesEmailIdentityDkimSigningAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

const dataAwsccSesEmailIdentityDkimSigningAttributes: dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes = { ... }
```


### DataAwsccSesEmailIdentityFeedbackAttributes <a name="DataAwsccSesEmailIdentityFeedbackAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

const dataAwsccSesEmailIdentityFeedbackAttributes: dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes = { ... }
```


### DataAwsccSesEmailIdentityMailFromAttributes <a name="DataAwsccSesEmailIdentityMailFromAttributes" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

const dataAwsccSesEmailIdentityMailFromAttributes: dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes = { ... }
```


### DataAwsccSesEmailIdentityTags <a name="DataAwsccSesEmailIdentityTags" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

const dataAwsccSesEmailIdentityTags: dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference <a name="DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

new dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes">DataAwsccSesEmailIdentityConfigurationSetAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesEmailIdentityConfigurationSetAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityConfigurationSetAttributes">DataAwsccSesEmailIdentityConfigurationSetAttributes</a>

---


### DataAwsccSesEmailIdentityDkimAttributesOutputReference <a name="DataAwsccSesEmailIdentityDkimAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

new dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.signingEnabled">signingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes">DataAwsccSesEmailIdentityDkimAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signingEnabled`<sup>Required</sup> <a name="signingEnabled" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.signingEnabled"></a>

```typescript
public readonly signingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesEmailIdentityDkimAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimAttributes">DataAwsccSesEmailIdentityDkimAttributes</a>

---


### DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference <a name="DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

new dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domainSigningSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes">DataAwsccSesEmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainSigningPrivateKey`<sup>Required</sup> <a name="domainSigningPrivateKey" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```typescript
public readonly domainSigningPrivateKey: string;
```

- *Type:* string

---

##### `domainSigningSelector`<sup>Required</sup> <a name="domainSigningSelector" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```typescript
public readonly domainSigningSelector: string;
```

- *Type:* string

---

##### `nextSigningKeyLength`<sup>Required</sup> <a name="nextSigningKeyLength" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```typescript
public readonly nextSigningKeyLength: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesEmailIdentityDkimSigningAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityDkimSigningAttributes">DataAwsccSesEmailIdentityDkimSigningAttributes</a>

---


### DataAwsccSesEmailIdentityFeedbackAttributesOutputReference <a name="DataAwsccSesEmailIdentityFeedbackAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

new dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled">emailForwardingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes">DataAwsccSesEmailIdentityFeedbackAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailForwardingEnabled`<sup>Required</sup> <a name="emailForwardingEnabled" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled"></a>

```typescript
public readonly emailForwardingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesEmailIdentityFeedbackAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityFeedbackAttributes">DataAwsccSesEmailIdentityFeedbackAttributes</a>

---


### DataAwsccSesEmailIdentityMailFromAttributesOutputReference <a name="DataAwsccSesEmailIdentityMailFromAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

new dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain">mailFromDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes">DataAwsccSesEmailIdentityMailFromAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="behaviorOnMxFailure" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure"></a>

```typescript
public readonly behaviorOnMxFailure: string;
```

- *Type:* string

---

##### `mailFromDomain`<sup>Required</sup> <a name="mailFromDomain" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain"></a>

```typescript
public readonly mailFromDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesEmailIdentityMailFromAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityMailFromAttributes">DataAwsccSesEmailIdentityMailFromAttributes</a>

---


### DataAwsccSesEmailIdentityTagsList <a name="DataAwsccSesEmailIdentityTagsList" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

new dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSesEmailIdentityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSesEmailIdentityTagsOutputReference <a name="DataAwsccSesEmailIdentityTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesEmailIdentity } from '@cdktn/provider-awscc'

new dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags">DataAwsccSesEmailIdentityTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesEmailIdentityTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesEmailIdentity.DataAwsccSesEmailIdentityTags">DataAwsccSesEmailIdentityTags</a>

---



