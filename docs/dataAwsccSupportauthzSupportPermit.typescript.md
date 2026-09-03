# `dataAwsccSupportauthzSupportPermit` Submodule <a name="`dataAwsccSupportauthzSupportPermit` Submodule" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSupportauthzSupportPermit <a name="DataAwsccSupportauthzSupportPermit" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/supportauthz_support_permit awscc_supportauthz_support_permit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

new dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit(scope: Construct, id: string, config: DataAwsccSupportauthzSupportPermitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig">DataAwsccSupportauthzSupportPermitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig">DataAwsccSupportauthzSupportPermitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSupportauthzSupportPermit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isConstruct"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformElement"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformDataSource"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSupportauthzSupportPermit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSupportauthzSupportPermit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSupportauthzSupportPermit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/supportauthz_support_permit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSupportauthzSupportPermit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference">DataAwsccSupportauthzSupportPermitPermitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.permitId">permitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.signingKeyInfo">signingKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference">DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.supportCaseDisplayId">supportCaseDisplayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList">DataAwsccSupportauthzSupportPermitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.permit"></a>

```typescript
public readonly permit: DataAwsccSupportauthzSupportPermitPermitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference">DataAwsccSupportauthzSupportPermitPermitOutputReference</a>

---

##### `permitId`<sup>Required</sup> <a name="permitId" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.permitId"></a>

```typescript
public readonly permitId: string;
```

- *Type:* string

---

##### `signingKeyInfo`<sup>Required</sup> <a name="signingKeyInfo" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.signingKeyInfo"></a>

```typescript
public readonly signingKeyInfo: DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference">DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportCaseDisplayId`<sup>Required</sup> <a name="supportCaseDisplayId" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.supportCaseDisplayId"></a>

```typescript
public readonly supportCaseDisplayId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.tags"></a>

```typescript
public readonly tags: DataAwsccSupportauthzSupportPermitTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList">DataAwsccSupportauthzSupportPermitTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSupportauthzSupportPermitConfig <a name="DataAwsccSupportauthzSupportPermitConfig" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

const dataAwsccSupportauthzSupportPermitConfig: dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/supportauthz_support_permit#id DataAwsccSupportauthzSupportPermit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSupportauthzSupportPermitPermit <a name="DataAwsccSupportauthzSupportPermitPermit" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

const dataAwsccSupportauthzSupportPermitPermit: dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit = { ... }
```


### DataAwsccSupportauthzSupportPermitPermitActions <a name="DataAwsccSupportauthzSupportPermitPermitActions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

const dataAwsccSupportauthzSupportPermitPermitActions: dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions = { ... }
```


### DataAwsccSupportauthzSupportPermitPermitConditions <a name="DataAwsccSupportauthzSupportPermitPermitConditions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

const dataAwsccSupportauthzSupportPermitPermitConditions: dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions = { ... }
```


### DataAwsccSupportauthzSupportPermitPermitResources <a name="DataAwsccSupportauthzSupportPermitPermitResources" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

const dataAwsccSupportauthzSupportPermitPermitResources: dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources = { ... }
```


### DataAwsccSupportauthzSupportPermitSigningKeyInfo <a name="DataAwsccSupportauthzSupportPermitSigningKeyInfo" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

const dataAwsccSupportauthzSupportPermitSigningKeyInfo: dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo = { ... }
```


### DataAwsccSupportauthzSupportPermitTags <a name="DataAwsccSupportauthzSupportPermitTags" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

const dataAwsccSupportauthzSupportPermitTags: dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSupportauthzSupportPermitPermitActionsOutputReference <a name="DataAwsccSupportauthzSupportPermitPermitActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

new dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.allActions">allActions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions">DataAwsccSupportauthzSupportPermitPermitActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `allActions`<sup>Required</sup> <a name="allActions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.allActions"></a>

```typescript
public readonly allActions: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSupportauthzSupportPermitPermitActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActions">DataAwsccSupportauthzSupportPermitPermitActions</a>

---


### DataAwsccSupportauthzSupportPermitPermitConditionsList <a name="DataAwsccSupportauthzSupportPermitPermitConditionsList" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

new dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.get"></a>

```typescript
public get(index: number): DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference <a name="DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

new dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter">allowAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore">allowBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions">DataAwsccSupportauthzSupportPermitPermitConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAfter`<sup>Required</sup> <a name="allowAfter" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter"></a>

```typescript
public readonly allowAfter: string;
```

- *Type:* string

---

##### `allowBefore`<sup>Required</sup> <a name="allowBefore" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore"></a>

```typescript
public readonly allowBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSupportauthzSupportPermitPermitConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditions">DataAwsccSupportauthzSupportPermitPermitConditions</a>

---


### DataAwsccSupportauthzSupportPermitPermitOutputReference <a name="DataAwsccSupportauthzSupportPermitPermitOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

new dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference">DataAwsccSupportauthzSupportPermitPermitActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList">DataAwsccSupportauthzSupportPermitPermitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference">DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit">DataAwsccSupportauthzSupportPermitPermit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.actions"></a>

```typescript
public readonly actions: DataAwsccSupportauthzSupportPermitPermitActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitActionsOutputReference">DataAwsccSupportauthzSupportPermitPermitActionsOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataAwsccSupportauthzSupportPermitPermitConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitConditionsList">DataAwsccSupportauthzSupportPermitPermitConditionsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.resources"></a>

```typescript
public readonly resources: DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference">DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSupportauthzSupportPermitPermit;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermit">DataAwsccSupportauthzSupportPermitPermit</a>

---


### DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference <a name="DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

new dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion">allResourcesInRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources">DataAwsccSupportauthzSupportPermitPermitResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allResourcesInRegion`<sup>Required</sup> <a name="allResourcesInRegion" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion"></a>

```typescript
public readonly allResourcesInRegion: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSupportauthzSupportPermitPermitResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitPermitResources">DataAwsccSupportauthzSupportPermitPermitResources</a>

---


### DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference <a name="DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

new dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo">DataAwsccSupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSupportauthzSupportPermitSigningKeyInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitSigningKeyInfo">DataAwsccSupportauthzSupportPermitSigningKeyInfo</a>

---


### DataAwsccSupportauthzSupportPermitTagsList <a name="DataAwsccSupportauthzSupportPermitTagsList" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

new dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSupportauthzSupportPermitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSupportauthzSupportPermitTagsOutputReference <a name="DataAwsccSupportauthzSupportPermitTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSupportauthzSupportPermit } from '@cdktn/provider-awscc'

new dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags">DataAwsccSupportauthzSupportPermitTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSupportauthzSupportPermitTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSupportauthzSupportPermit.DataAwsccSupportauthzSupportPermitTags">DataAwsccSupportauthzSupportPermitTags</a>

---



