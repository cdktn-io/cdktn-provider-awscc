# `dataAwsccRolesanywhereTrustAnchor` Submodule <a name="`dataAwsccRolesanywhereTrustAnchor` Submodule" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRolesanywhereTrustAnchor <a name="DataAwsccRolesanywhereTrustAnchor" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rolesanywhere_trust_anchor awscc_rolesanywhere_trust_anchor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor(scope: Construct, id: string, config: DataAwsccRolesanywhereTrustAnchorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig">DataAwsccRolesanywhereTrustAnchorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig">DataAwsccRolesanywhereTrustAnchorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRolesanywhereTrustAnchor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isConstruct"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isTerraformElement"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isTerraformDataSource"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.generateConfigForImport"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRolesanywhereTrustAnchor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRolesanywhereTrustAnchor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRolesanywhereTrustAnchor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rolesanywhere_trust_anchor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRolesanywhereTrustAnchor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList">DataAwsccRolesanywhereTrustAnchorNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference">DataAwsccRolesanywhereTrustAnchorSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList">DataAwsccRolesanywhereTrustAnchorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.trustAnchorArn">trustAnchorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.trustAnchorId">trustAnchorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: DataAwsccRolesanywhereTrustAnchorNotificationSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList">DataAwsccRolesanywhereTrustAnchorNotificationSettingsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.source"></a>

```typescript
public readonly source: DataAwsccRolesanywhereTrustAnchorSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference">DataAwsccRolesanywhereTrustAnchorSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.tags"></a>

```typescript
public readonly tags: DataAwsccRolesanywhereTrustAnchorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList">DataAwsccRolesanywhereTrustAnchorTagsList</a>

---

##### `trustAnchorArn`<sup>Required</sup> <a name="trustAnchorArn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.trustAnchorArn"></a>

```typescript
public readonly trustAnchorArn: string;
```

- *Type:* string

---

##### `trustAnchorId`<sup>Required</sup> <a name="trustAnchorId" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.trustAnchorId"></a>

```typescript
public readonly trustAnchorId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRolesanywhereTrustAnchorConfig <a name="DataAwsccRolesanywhereTrustAnchorConfig" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const dataAwsccRolesanywhereTrustAnchorConfig: dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rolesanywhere_trust_anchor#id DataAwsccRolesanywhereTrustAnchor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRolesanywhereTrustAnchorNotificationSettings <a name="DataAwsccRolesanywhereTrustAnchorNotificationSettings" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettings.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const dataAwsccRolesanywhereTrustAnchorNotificationSettings: dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettings = { ... }
```


### DataAwsccRolesanywhereTrustAnchorSource <a name="DataAwsccRolesanywhereTrustAnchorSource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSource.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const dataAwsccRolesanywhereTrustAnchorSource: dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSource = { ... }
```


### DataAwsccRolesanywhereTrustAnchorSourceSourceData <a name="DataAwsccRolesanywhereTrustAnchorSourceSourceData" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceData.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const dataAwsccRolesanywhereTrustAnchorSourceSourceData: dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceData = { ... }
```


### DataAwsccRolesanywhereTrustAnchorTags <a name="DataAwsccRolesanywhereTrustAnchorTags" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTags.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

const dataAwsccRolesanywhereTrustAnchorTags: dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRolesanywhereTrustAnchorNotificationSettingsList <a name="DataAwsccRolesanywhereTrustAnchorNotificationSettingsList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.get"></a>

```typescript
public get(index: number): DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference <a name="DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettings">DataAwsccRolesanywhereTrustAnchorNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRolesanywhereTrustAnchorNotificationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorNotificationSettings">DataAwsccRolesanywhereTrustAnchorNotificationSettings</a>

---


### DataAwsccRolesanywhereTrustAnchorSourceOutputReference <a name="DataAwsccRolesanywhereTrustAnchorSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.sourceData">sourceData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference">DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSource">DataAwsccRolesanywhereTrustAnchorSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceData`<sup>Required</sup> <a name="sourceData" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.sourceData"></a>

```typescript
public readonly sourceData: DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference">DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference</a>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRolesanywhereTrustAnchorSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSource">DataAwsccRolesanywhereTrustAnchorSource</a>

---


### DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference <a name="DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArn">acmPcaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateData">x509CertificateData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceData">DataAwsccRolesanywhereTrustAnchorSourceSourceData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acmPcaArn`<sup>Required</sup> <a name="acmPcaArn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.acmPcaArn"></a>

```typescript
public readonly acmPcaArn: string;
```

- *Type:* string

---

##### `x509CertificateData`<sup>Required</sup> <a name="x509CertificateData" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.x509CertificateData"></a>

```typescript
public readonly x509CertificateData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRolesanywhereTrustAnchorSourceSourceData;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorSourceSourceData">DataAwsccRolesanywhereTrustAnchorSourceSourceData</a>

---


### DataAwsccRolesanywhereTrustAnchorTagsList <a name="DataAwsccRolesanywhereTrustAnchorTagsList" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRolesanywhereTrustAnchorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRolesanywhereTrustAnchorTagsOutputReference <a name="DataAwsccRolesanywhereTrustAnchorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRolesanywhereTrustAnchor } from '@cdktn/provider-awscc'

new dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTags">DataAwsccRolesanywhereTrustAnchorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRolesanywhereTrustAnchorTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRolesanywhereTrustAnchor.DataAwsccRolesanywhereTrustAnchorTags">DataAwsccRolesanywhereTrustAnchorTags</a>

---



